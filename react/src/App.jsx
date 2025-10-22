import { useState } from 'react'
import './App.css'
import { Otp } from './components/Otp';

function App() {

  return (
      <div className="bg-[#002b5b] min-h-screen">
          <div className="flex justify-center p-12 ">
              <img
                  className="size-6"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997592.png"
                  alt="webinar image"
              />
              <div className="flex px-2 font-mono font-medium text-2xl leading-6">
                  <div className="text-[#36c6c0]">Webinar.</div>
                  <div className="text-white">gg</div>
              </div>
          </div>
          <div className="text-center">
              <p className="font-mono pt-8 text-2xl text-white tracking-tighter font-bold">
                  Verify Your Age
              </p>
              <p className="text-xs text-[#8094ad] tracking-tight">
                  Please confirm your birth year. This data will not be stored.
              </p>
              <input
                  className="border border-gray-500 bg-[#19406a] m-3 px-2 py-1 rounded-md text-sm text-gray-400 "
                  type="text"
                  placeholder="Your Birth Year"
              />
              <br />
              <Otp number={6} />
              <button className="bg-[#8094ad] rounded-md text-white font-semibold text-sm py-1.5 px-15 m-2 cursor-pointer hover:bg-green-600">
                  Continue
              </button>
          </div>
      </div>
  );
}

export default App
