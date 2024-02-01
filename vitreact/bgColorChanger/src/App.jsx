import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 

function App() {
  const [color, setCount] = useState("grey")

  return (
    <>
       <div className="w-full h-screen duration-200" style={{ backgroundColor: color }} >
      <div className="flex justify-center items-center h-full">
        {/* Define different colors for each button using Tailwind CSS classes */}
        <button onClick={() => setCount("blue")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Blue</button>
        <button onClick={() => setCount("green")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">Green</button>
        <button onClick={() => setCount("red")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">Red</button>
        <button onClick={() => setCount("orange")} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2">Orange</button>
        <button onClick={() => setCount("purple")} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2">Purple</button>
        <button onClick={() => setCount("white")} className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded m-2">White</button>
      </div>
    </div>
    </>
  )
}

export default App
