import React from 'react'
import Background from './Background'
import Terminal from './Terminal'
const Main = () => {
  return (
    <div>

      <div className='h-screen w-full flex flex-col items-center justify-center absolute z-10 '>
        <div className="block sm:hidden mb-10 bg-yellow-200 py-3  text-center text-xl text-gray-700">
          <p>For better experience please try this with pc!</p>
          <p>This is not design for mobile view.</p>
          <a href="https://portfolio-1c776.web.app/" className="block p-2 underline">
            Visit this instead
          </a>
        </div>
        <Terminal />
      </div>
      <div className='h-[100vh] w-[100%] absolute'>
        <Background />
      </div>

    </div>
  )
}

export default Main
