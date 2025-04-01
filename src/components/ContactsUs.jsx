import React from 'react'
import RightDoctor from '../assets/Medical research-bro.svg'
import SignUpCard from '../components/SignUpCard.jsx'

const ContactsUs = () => {
  return (
    <div className="">
      {/* Mobile */}
      <div className="lg:hidden bg-[#560090] w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-2/3 flex justify-center items-center pt-20">
          <img
            src={RightDoctor}
            alt="Correct Doctors"
            className="w-full"
          />
        </div>

        <div className="flex text-white w-screen text-xl justify-center text-center px-8">
          <span>Signup with us to Recieve the RIGHT Treatment !</span>
        </div>

        <div className="lg:hidden px-4 scale-60 md:-mt-0 -mt-20 md:scale-75">
          <SignUpCard />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex bg-[#560090] w-screen flex-row">
        <div className="w-7/12 flex justify-end items-center pr-20 relative z-20">
          <img src={RightDoctor} alt="Correct Doctors" className="custom-svg" />
        </div>
        <div className="lg:w-1/2 xl:w-2/3 flex flex-col justify-center items-center pl-9">
          <div className="flex font-mono font-extrabold justify-center items-center pr-20 text-white lg:text-4xl text-3xl pt-20">
            <span className='font-mono'>SignUp with us to Recieve the <span className='text-l2'>RIGHT</span> Treatment !</span>
          </div>
          <div className='w-full mr-20 py-2 lg:scale-75 xl:scale-100'>
            <SignUpCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsUs
