import {
  ArrowBigRight,
  ArrowRightCircle,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import "./App.css";
import MovingButton from "./components/MovingButton";

function App() {
  const Links = [
    {
      icon: <GithubIcon />,
      url: "https://github.com/yh010",
    },
    {
      icon: <TwitterIcon />,
      url: "https://x.com/YashHegde7",
    },
    {
      icon: <LinkedinIcon />,
      url: "https://www.linkedin.com/in/yash-hegde-927721201/",
    },
  ];

  const TopPicks = [
    {
      component: "Component1",
    },
    {
      component: "Component2",
    },
    {
      component: "Component3",
    },
    {
      component: "Component4",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-black px-6">
      <nav className="border-b-[#d6ccc2] border-b w-full border-dashed flex justify-between items-center py-4">
        <div className="font-playwrite">yash hegde</div>

        <div className="flex justify-center items-center gap-x-9">
          {Links.map((item, idx) => (
            <a href={item.url} key={idx}>
              {item.icon}
            </a>
          ))}
        </div>
        <div>lithouse</div>
      </nav>
      <div className="flex py-8">
        <div className="w-3/4 text-9xl font-semibold font-fjalla">
          Crazy Portfolio
        </div>
        <div>
          <span>
            Welcome to my portfolio of animated components using motion.dev and
            tailwind
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
          <div className="p-4 underline">My top picks</div>
          <div className="flex-1 flex flex-col justify-evenly divide-y">
            {TopPicks.map((item, idx) => (
              <div key={idx} className="p-4">
                {item.component}
              </div>
            ))}
          </div>
          <button className="p-4 hover:bg-[#1b263b] text-white bg-[#0d1b2a] w-fit rounded-full flex justify-center items-center space-x-1">
            <span>Take a detailed look</span>
            <ArrowRightCircle className="h-4 w-4" />
          </button>
        </div>
        <div className="w-3/5 bg-white rounded-lg flex justify-center items-center overflow-hidden">
          <img src="/Crazy.png" className="rounded-lg h-80" />
        </div>
      </div>
    </div>
  );
}

export default App;
