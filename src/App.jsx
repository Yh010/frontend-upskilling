import './App.css'
import MovingButton from './components/MovingButton'

function App() {

  return (
    <div className='[perspective::1000px] [transform-3d] h-screen w-full flex items-center justify-center bg-neutral-900' style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px,transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}> 
      <MovingButton/>
    </div>
  )
}

export default App
