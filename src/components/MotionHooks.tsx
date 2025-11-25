import React, { useRef } from "react";
import { Rocket, Palette, Camera, Zap } from "lucide-react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "motion/react";

function MotionHooks() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: "Generate ultra realistic images in seconds",
      description:
        "With our state-of-the-art AI, you can generate ultra realistic images in no time at all.",
      content: (
        <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-100 ">
          <Rocket className="h-40 w-20 text-neutral-300 mx-auto" />
        </div>
      ),
    },
    {
      icon: <Palette className="h-8 w-8 text-neutral-200" />,
      title: "Beautiful styles",
      description:
        "Choose from countless carefully engineered artistic styles.",
      content: (
        <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-100 ">
          <Palette className="h-40 w-20 text-neutral-300 mx-auto" />
        </div>
      ),
    },
    {
      icon: <Camera className="h-8 w-8 text-neutral-200" />,
      title: "Photographic precision",
      description:
        "Advanced rendering ensures your output is sharp, crisp, and vibrant.",
      content: (
        <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-100 ">
          <Camera className="h-40 w-20 text-neutral-300 mx-auto" />
        </div>
      ),
    },
    {
      icon: <Zap className="h-8 w-8 text-neutral-200" />,
      title: "Lightning fast",
      description:
        "Optimized inference delivers results instantly, even at high resolutions.",
      content: (
        <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-100 ">
          <Zap className="h-40 w-20 text-neutral-300 mx-auto" />
        </div>
      ),
    },
  ];
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
      {features.map((feature, idx) => (
        <Card key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

const Card = ({ feature }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, 200])
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {" "}
        {feature.content}
      </motion.div>
    </div>
  );
};

export default MotionHooks;
