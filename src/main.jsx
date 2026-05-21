import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import SiteLayout from "./components/site/SiteLayout";
import { labsMotionEntries } from "./content/labs";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import LabsMotionPage from "./pages/labs/LabsMotionPage";
import LabDetailPage from "./pages/labs/LabDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";

const legacyLabRoutes = labsMotionEntries.flatMap((lab) =>
  (lab.legacyPaths ?? []).map((legacyPath) => ({
    path: legacyPath,
    loader: () => redirect(lab.route),
  })),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "certifications", element: <CertificationsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "labs", loader: () => redirect("/labs/motion") },
      { path: "labs/motion", element: <LabsMotionPage /> },
      { path: "labs/motion/:slug", element: <LabDetailPage /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "courses/:slug", element: <CourseDetailPage /> },
      { path: "navbar", loader: () => redirect("/") },
      ...legacyLabRoutes,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>,
);
