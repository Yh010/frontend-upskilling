import { createHmac, timingSafeEqual } from "node:crypto";

export const config = { api: { bodyParser: false } };

const contentEvents = new Set(["page.created", "page.content_updated", "page.properties_updated", "page.deleted", "page.undeleted"]);

function validSignature(rawBody, signature) {
  const token = process.env.NOTION_WEBHOOK_VERIFICATION_TOKEN;
  if (!token || !signature) return false;

  const expected = `sha256=${createHmac("sha256", token).update(rawBody).digest("hex")}`;
  const actual = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  return actual.length === expectedBuffer.length && timingSafeEqual(actual, expectedBuffer);
}

async function readRawBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });

  const rawBody = await readRawBody(request);
  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return response.status(400).json({ error: "Expected a JSON payload" });
  }

  if (payload.verification_token) {
    console.info(`Notion webhook verification token: ${payload.verification_token}`);
    return response.status(200).json({ received: true });
  }

  if (!validSignature(rawBody, request.headers["x-notion-signature"])) {
    return response.status(401).json({ error: "Invalid Notion signature" });
  }

  if (!contentEvents.has(payload.type)) return response.status(200).json({ ignored: true });

  const deployHook = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (!deployHook) return response.status(500).json({ error: "VERCEL_DEPLOY_HOOK_URL is not configured" });

  const deploy = await fetch(deployHook, { method: "POST" });
  if (!deploy.ok) return response.status(502).json({ error: "Vercel deploy hook failed" });

  return response.status(202).json({ redeploying: true });
}
