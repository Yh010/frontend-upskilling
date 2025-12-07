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
import { useState } from "react";

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
  const activeItem = TopPicks.find((item) => item.id === activeId);
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
        <div className="flex py-8">
          <div className="w-3/4 md:text-9xl font-semibold font-fjalla">
            Crazy Portfolio
          </div>
          <div>
            <span>
              Welcome to my portfolio of animated components using motion.dev
              and tailwind
            </span>
            <div className="flex justify-center items-center">
              <div className="border rounded-xl py-2 px-4">Get started</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src="/Crazy.png" className="rounded-lg h-120 w-full" />
        </div>

        <div className="flex flex-col items-center py-30">
          <div className="text-4xl">From pixels to worlds</div>
          <div>
            Marble, our first product, generates spatially consistent,
            high-fidelity, and persistent 3D worlds that you can move through,
            edit, and inhabit.
          </div>
        </div>

        <div className="flex h-96">
          <div className="w-2/5 h-full relative flex flex-col px-6">
            <div className="py-2 underline">My top picks</div>
            <div className="flex-1 flex flex-col justify-evenly divide-y">
              {TopPicks.map((item) => (
                <button
                  key={item.id}
                  className="w-full text-start py-2"
                  onClick={() => {
                    setActiveId(item.id);
                  }}
                >
                  <div>{item.component}</div>
                  {activeItem.id === item.id && <div>{item.description}</div>}
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/5 bg-white relative shadow-lg rounded-lg flex flex-col justify-center items-center overflow-hidden">
            <button
              className="p-4 hover:bg-[#1b263b] text-white absolute top-10 right-40  bg-[#0d1b2a] w-fit rounded-full flex justify-center items-center space-x-1"
              onClick={() => (window.location.href = activeItem.url)}
            >
              <span> go to page</span>
              <ArrowRightCircle className="h-4 w-4" />
            </button>
            {activeItem && (
              <img src={activeItem.url} className="rounded-lg h-80" />
            )}
          </div>
        </div>

        <footer className="border-t border-dashed border-[#d6ccc2] mt-20 py-12">
          <div className="flex justify-between items-start">
            <div className="flex flex-col space-y-4">
              <div className="font-playwrite text-2xl">yash hegde</div>
              <p className="text-sm text-gray-600 max-w-xs">
                Crafting interactive experiences with motion and creativity.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex flex-col space-y-2">
                {Links.map((item, idx) => (
                  <a
                    href={item.url}
                    key={idx}
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
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

            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2 text-sm text-gray-600">
                <a href="#" className="hover:text-black transition-colors">
                  Projects
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-dashed border-[#d6ccc2] flex justify-between items-center text-sm text-gray-500">
            <div>© 2024 Yash Hegde. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
