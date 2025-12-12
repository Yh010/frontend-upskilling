import {
  ArrowRightCircle,
  ChevronsUp,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  TwitterIcon,
} from "lucide-react";
import "./App.css";
import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const Links = [
  {
    icon: <GithubIcon />,
    desc: "Github",
    url: "https://github.com/yh010",
  },
  {
    icon: <TwitterIcon />,
    desc: "X (Twitter)",
    url: "https://x.com/YashHegde7",
  },
  {
    icon: <LinkedinIcon />,
    desc: "Linkedin",
    url: "https://www.linkedin.com/in/yash-hegde-927721201/",
  },
  {
    icon: <MailIcon />,
    desc: "Email",
    url: "https://www.linkedin.com/in/yash-hegde-927721201/",
  },
  {
    icon: <div>Experience</div>,
    desc: "Email",
    url: "https://www.linkedin.com/in/yash-hegde-927721201/",
  },
  {
    icon: <div>Projects</div>,
    desc: "Email",
    url: "https://www.linkedin.com/in/yash-hegde-927721201/",
  },
  {
    icon: <div>Lithouse</div>,
    desc: "Email",
    url: "https://www.linkedin.com/in/yash-hegde-927721201/",
  },
];

const TopPicks = [
  {
    id: 1,
    component: "Component1",
    url: "/Crazy.png",
    description: "hello hello",
  },
  {
    id: 2,
    component: "Component2",
    url: "/vite.svg",
    description: "hello hello",
  },
  {
    id: 3,
    component: "Component3",
    url: "/Crazy.png",
    description: "hello hello",
  },
  {
    id: 4,
    component: "Component4",
    url: "/Crazy.png",
    description: "hello hello",
  },
];

function App() {
  const [activeId, setActiveId] = useState(1);
  const [menuState, setMenuState] = useState(false);
  //const [gotoHover, setGotoHover] = useState(false);
  const activeItem = TopPicks.find((item) => item.id === activeId);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-black px-6">
      <nav className="w-full  bg-size-[6px_2px] bg-repeat-x bg-bottom bg-[radial-gradient(circle,#d6ccc2_1px,transparent_1px)] flex justify-between items-center py-4">
        <div className="font-banger md:text-4xl text-2xl">yash hegde</div>
        <div className="md:flex justify-center items-center hidden md:gap-x-9">
          {Links.map((item, idx) => (
            <a href={item.url} key={idx}>
              {item.icon}
            </a>
          ))}
        </div>

        <img
          src="/yh.png"
          className="h-12 w-12 rounded-full border hidden md:flex"
        />
        <div className="md:hidden">
          <button
            className="flex justify-center items-center"
            onClick={() => {
              setMenuState((prev) => !prev);
            }}
          >
            {!menuState ? <MenuIcon /> : <ChevronsUp />}
          </button>
        </div>
      </nav>
      {menuState && (
        <div className="inset-0 w-full flex flex-col items-center min-h-screen md:hidden">
          <div className="w-full flex-1 flex flex-col justify-start gap-y-10 mt-20 text-4xl items-start">
            {Links.map((item, idx) => (
              <a
                href={item.url}
                key={idx}
                className="flex justify-start items-center w-full"
              >
                <div className="font-banger">{item.desc}</div>
              </a>
            ))}
          </div>
        </div>
      )}
      <div className={menuState ? "hidden" : "block"}>
        <div className="md:flex py-8">
          <motion.div
            initial={{
              opacity: 0.5,
              scale: 1.1,
              y: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="w-full md:w-3/4 md:text-8xl 2xl:text-9xl md:text-start text-5xl text-[#250902] font-semibold font-fjalla"
            style={{
              WebkitTextStroke: "0.75px #003566",
              color: "#250902",
            }}
          >
            Crazy Portfolio
          </motion.div>
          <div className="pt-4 md:pl-4">
            <span>
              Explore a collection of motion-powered UI experiments, interactive
              components, and creative builds crafted with Tailwind CSS and
              Motion.dev.
            </span>
            <div className="flex justify-start items-center pt-4">
              <motion.div
                className="border-2 border-[#fca311] text-white rounded-xl py-2 px-4 bg-[#0a2463] cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Get started
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="p-1 rounded-4xl bg-linear-to-r from-[#252323] to-[#1282a2]"
        >
          <div className="p-1 rounded-4xl bg-[#ffdd00]">
            <div className="flex justify-center items-center">
              <img src="/Crazy.png" className="rounded-4xl md:h-120 w-full" />
            </div>
          </div>
        </motion.div>

        <div
          ref={ref}
          className="flex flex-col items-center md:py-30 py-15 text-center border border-red-300 h-400 justify-center"
        >
          <motion.div
            className="text-4xl sticky  top-1/2 -translate-y-1/2"
            style={{ opacity: scale1, scale: scale1 }}
            // initial={{ scale: 1 }}
            // whileInView={{ scale: 1.5 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            From pixels to worlds
          </motion.div>
          <motion.div
            className="text-sm md:text-base text-[#6c757d] sticky top-3/5 mt-4 -translate-y-1/4"
            style={{ opacity: scale2, scale: scale2 }}
          >
            These components represent my ongoing practice with Motion.dev and
            Tailwind, focusing on motion, responsiveness, and clarity.{" "}
          </motion.div>
        </div>

        {/* <div className="flex h-54 lg:h-96">
          <div className="md:w-2/5 w-full h-full border relative flex flex-col px-1">
            <div className="md:py-2 underline w-full text-center md:text-start">
              My top picks
            </div>
            <div className="flex-1 flex flex-col justify-evenly divide-y divide-[#dee2e6] md:pr-6">
              {TopPicks.map((item) => (
                <button
                  key={item.id}
                  className="w-full text-start md:py-2"
                  onClick={() => {
                    setActiveId(item.id);
                  }}
                >
                  <div className="text-sm md:text-base">{item.component}</div>
                  {activeItem?.id === item.id && (
                    <div className="text-xs md:text-sm text-[#6c757d]">
                      {item.description}
                    </div>
                  )}
                  {activeItem?.id === item.id && (
                    <div className="md:hidden bg-white relative shadow-lg h-2/5 border border-red-500 rounded-lg flex flex-col justify-center items-center">
                      <button
                        className="px-4 py-2 hover:bg-[#1b263b] text-white absolute top-2 right-2  bg-[#0d1b2a] w-fit rounded-full flex justify-center items-center space-x-1"
                        onMouseEnter={() => {
                          setGotoHover(true);
                        }}
                        onMouseLeave={() => {
                          setGotoHover(false);
                        }}
                        onTouchStart={() => setGotoHover(true)}
                        onTouchEnd={() => setGotoHover(false)}
                        onClick={() =>
                          (window.location.href = activeItem?.url || "")
                        }
                      >
                        {gotoHover && <span> go to page</span>}
                        <ArrowRightCircle className="h-4 w-4" />
                      </button>
                      {activeItem && (
                        <img
                          src={activeItem.url}
                          className="rounded-lg h-9/10 w-9/10 lg:h-80"
                        />
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/5 bg-white relative shadow-lg rounded-lg hidden md:flex flex-col justify-center items-center overflow-hidden">
            <button
              className="px-4 py-2 hover:bg-[#1b263b] text-white absolute top-2 right-2  bg-[#0d1b2a] w-fit rounded-full flex justify-center items-center space-x-1"
              onMouseEnter={() => {
                setGotoHover(true);
              }}
              onMouseLeave={() => {
                setGotoHover(false);
              }}
              onTouchStart={() => setGotoHover(true)}
              onTouchEnd={() => setGotoHover(false)}
              onClick={() => (window.location.href = activeItem?.url || "")}
            >
              {gotoHover && <span> go to page</span>}
              <ArrowRightCircle className="h-4 w-4" />
            </button>
            {activeItem && (
              <img src={activeItem.url} className="rounded-lg h-80" />
            )}
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row min-h-[400px] md:h-96 gap-4 md:gap-0">
          {/* Left Column - Component List */}
          <div className="w-full md:w-2/5 h-full relative flex flex-col px-4 md:px-6">
            <div className="py-2 md:p-4 underline text-center md:text-left md:text-3xl">
              My top picks
            </div>
            <div className="flex-1 flex flex-col justify-evenly divide-y divide-[#dee2e6]">
              {TopPicks.map((item) => (
                <button
                  key={item.id}
                  className="p-3 md:p-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setActiveId(item.id);
                  }}
                >
                  <div
                    className={`text-sm md:text-base ${
                      activeId === item.id ? "font-semibold" : ""
                    }`}
                  >
                    {item.component}
                  </div>
                  <div
                    className={`text-sm md:text-base ${
                      activeId === item.id
                        ? "text-xs md:text-sm text-[#6c757d]"
                        : "hidden"
                    }`}
                  >
                    {item.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Image Display (Desktop) */}
          <div className="hidden md:flex w-full md:w-3/5 bg-white relative shadow-lg rounded-lg flex-col justify-center items-center overflow-hidden">
            <button
              className="px-4 py-2 hover:bg-[#1b263b] text-white absolute top-4 right-4 bg-[#0d1b2a] w-fit rounded-full flex justify-center items-center space-x-1 transition-all group"
              onClick={() => (window.location.href = activeItem?.url || "")}
            >
              <span className="hidden group-hover:inline">go to page</span>
              <ArrowRightCircle className="h-4 w-4" />
            </button>
            {activeItem && (
              <img
                src={activeItem.url}
                alt={activeItem.component}
                className="rounded-lg h-80 object-cover"
              />
            )}
          </div>

          {/* Image Display (Mobile) - Shows below selected item */}
          <div className="md:hidden w-full bg-white shadow-lg rounded-lg flex flex-col justify-center items-center overflow-hidden min-h-[250px] relative">
            <button
              className="px-3 py-1.5 hover:bg-[#1b263b] text-white absolute top-2 right-2 bg-[#0d1b2a] rounded-full flex justify-center items-center z-10"
              onClick={() => (window.location.href = activeItem?.url || "")}
            >
              <ArrowRightCircle className="h-4 w-4" />
            </button>
            {activeItem && (
              <img
                src={activeItem.url}
                alt={activeItem.component}
                className="rounded-lg w-full h-full object-contain p-4"
              />
            )}
          </div>
        </div>

        <footer className="border-t border-dashed border-[#d6ccc2] mt-20 py-8 md:py-12 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-4">
            {/* Brand Section */}
            <div className="flex flex-col space-y-4">
              <div className="font-playwrite text-xl md:text-2xl">
                yash hegde
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Crafting interactive experiences with motion and creativity.
              </p>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider">
                Connect
              </h3>
              <div className="grid grid-cols-2 md:flex gap-4">
                {Links.map((item, idx) => (
                  <a
                    href={item.url}
                    key={idx}
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors border"
                  >
                    <span className="w-4 h-4">{item.icon}</span>
                    <span className="text-sm">
                      {item.url.includes("github")
                        ? "GitHub"
                        : item.url.includes("twitter") ||
                          item.url.includes("x.com")
                        ? "Twitter"
                        : "LinkedIn"}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-dashed border-[#d6ccc2] flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs md:text-sm text-gray-500">
            <div className="text-center md:text-left">
              © 2024 Yash Hegde. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
