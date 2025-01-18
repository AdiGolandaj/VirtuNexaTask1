import React from 'react';

const SignUpCard = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-l4 rounded-2xl shadow-lg p-8">
            <h2 className="text-5xl font-extrabold text-l2">Sign Up</h2>
            <form className="w-full mt-6">
            <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            <button
                type="submit"
                className="w-full bg-l4 hover:bg-l2 focus:bg-l1 text-white font-semibold p-3 rounded-lg mt-4"
            >
                Sign Up
            </button>
            </form>
        </div>
    </div>
  );
};

export default SignUpCard;