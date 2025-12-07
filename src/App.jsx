import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import './App.css'
import MovingButton from './components/MovingButton';

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

  return (
    <div className='min-h-screen flex flex-col bg-[#fbf7ef] text-black'> 
      <nav className='border-b-[#d6ccc2] border-b w-full border-dashed flex justify-between items-center py-4 px-6'>
        <div className='font-playwrite'>
          yash hegde
        </div>

         <div className='flex justify-center items-center gap-x-9'>
          {Links.map((item, idx) => (
            <a href={ item.url} key={idx}>
              {item.icon}
            </a>
          ))}
        </div>
        <div>
          lithouse
        </div>
      </nav>
      <div className='flex py-8 px-6'>
        <div className='w-3/4 text-9xl font-semibold font-fjalla'>
          Crazy Portfolio
        </div>
        <div>
          <span>Welcome to my portfolio of animated components using motion.dev and tailwind</span> 
          <div className='flex justify-center items-center'>
            <div className='border rounded-xl py-2 px-4'>
              Get started
            </div>
          </div>
      </div>
      </div>
      <div className='px-6 flex justify-center items-center'>
       <img src='/public/Crazy.png' className='rounded-lg h-120 w-full'/>
      </div>
    </div>
  )
}

export default App
