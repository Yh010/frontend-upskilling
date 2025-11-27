import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MovingButtonPage from './pages/MovingButtonPage.js';
import AnimatedCardPage from './pages/AnimatedCardPage.js';
import SidebarAnimationPage from './pages/SidebarAnimationPage.js';
import MotionHooksPage from './pages/MotionHooksPage.js';
import LayoutCardsPage from './pages/LayoutCardsPage.js';
import { Navbar } from './components/Navbar.js';
import { AnimatedTextPage } from './pages/AnimatedTextPage.js';
import { AnimationSequencesPage } from './pages/AnimationSequencesPage.js';
import { ToolTip } from './components/ToolTip.js';
import { ThreeDCard } from './components/ThreeDCard.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/movingbutton",
    element: <MovingButtonPage />
  },{
    path: "/animatedcard",
    element: <AnimatedCardPage />
  },{
    path: "/sidebar",
    element: <SidebarAnimationPage />
  },
  {
    path: "/motionhooks",
    element: <MotionHooksPage />
  },
  {
    path: "/layout",
    element: <LayoutCardsPage />
  }, {
    path: "/navbar",
    element: <Navbar />
  },
  {
    path: "/animatedText",
    element: <AnimatedTextPage />
  },
  {
    path: "/animatedsequence",
    element: <AnimationSequencesPage />
  },
  {
    path: "/toolTip",
    element: <ToolTip />
  },{
    path: "/card",
    element: <ThreeDCard />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    
  </StrictMode>,
)
