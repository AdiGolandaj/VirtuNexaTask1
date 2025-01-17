import React from 'react'
import RightDoctor from '../assets/Medical research-bro.svg'
import SignUpCard from '../components/SignUpCard.jsx'

const ContactsUs = () => {
  return (
    <div className="relative">
      {/* Mobile */}
      <div className="lg:hidden bg-[#560090] w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-2/3 flex justify-center items-center pt-4">
          <img
            src={RightDoctor}
            alt="Correct Doctors"
            className="w-full h-auto"
          />
        </div>

        <div className="flex text-white w-screen text-3xl justify-center text-center px-8 py-5 pt-12">
          <span>SignUp with us to Recieve the RIGHT Treatment !</span>
        </div>

        <div className="lg:hidden px-16">
          <SignUpCard />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex bg-[#560090] w-screen flex-row">
        <div className="w-7/12 flex justify-end items-center pr-20 pt-20 relative z-20">
          <img src={RightDoctor} alt="Correct Doctors" className="custom-svg" />
        </div>
        <div className="lg:w-1/2 xl:w-2/3 flex flex-col justify-center items-center pl-9">
          <div className="flex font-mono font-extrabold justify-center items-center pr-20 text-white lg:text-5xl text-3xl pt-20">
            <span className='font-mono'>SignUp with us to Recieve the <span className='text-l2'>RIGHT</span> Treatment !</span>
          </div>
          <div className='w-full mr-20 py-11'>
            <SignUpCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsUs