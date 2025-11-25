import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MovingButtonPage from './pages/MovingButtonPage.js';
import AnimatedCardPage from './pages/AnimatedCardPage.js';
import SidebarAnimationPage from './pages/SidebarAnimationPage.js';

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
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    
  </StrictMode>,
)
