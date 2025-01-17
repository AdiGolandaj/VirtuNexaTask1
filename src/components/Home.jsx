import React from 'react'
import MedicalResearchSVG from '../assets/Medical research-amico.svg'

const Home = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:flex bg-l2 w-screen h-svh flex-row">
        <div className="flex flex-col w-1/2 justify-center items-center pl-9">
          <div className="flex font-mono font-extrabold justify-center text-white lg:text-8xl text-5xl pl-7 pt-20">
            <span>Your Health, Our Priority</span>
          </div>
          <div className="flex justify-center text-white md:text-3xl text-xl pl-10 pt-5">
            <span>
              Providing top-notch healthcare services with a personal touch.
              Your well-being is our mission.
            </span>
          </div>
        </div>
        <div className="w-8/12 flex justify-end items-center pr-20 pt-20 relative z-20">
          <img
            src={MedicalResearchSVG}
            alt="Medical Research"
            className="custom-svg"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden bg-l2 w-screen h-svh flex flex-col justify-center items-center overflow-x-hidden">
        <div className="w-2/3 flex justify-center items-center pt-20">
          <img
            src={MedicalResearchSVG}
            alt="Medical Research"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-mono font-extrabold text-white text-7xl w-screen justify-center text-center px-8 pt-5">
            <span>Your Health, Our Priority</span>
          </div>
          <div className="flex text-white w-screen text-3xl text-center px-8 pt-5">
            <span>
              Providing top-notch healthcare services with a personal touch.
              Your well-being is our mission.
            </span>
          </div>
        </div>
      </div>

      {/*wave bellow*/}
      <div>
        <div
          className=" z-0 aspect-w-13 aspect-h-3 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('src/assets/layered-steps-haikei.svg')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home