import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // To store the selected role
  const [accessLevel, setAccessLevel] = useState(""); // To store the selected access level

  const handleLogin = () => {
    // Redirect to the /home route
    navigate("/home");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='relative w-full h-[90vh] overflow-hidden'>
      {/* Background Image */}
      <img
        src='/bg.jpeg'
        alt='Transport Background'
        className='absolute h-full w-full object-cover'
      />

      {/* Overlay with Form */}
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <div className='bg-[#112445ea] p-8 pb-4 rounded shadow-lg max-w-md w-full flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            {/* First Name and Last Name Inputs */}
            <input
              type='text'
              placeholder='First Name'
              className='w-full p-3 border border-gray-300 rounded'
            />
            <input
              type='text'
              placeholder='Last Name'
              className='w-full p-3 border border-gray-300 rounded'
            />
          </div>

          {/* Email Input */}
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 border border-gray-300 rounded'
          />
          <input
            type='tel'
            placeholder='Phone Number (optional)'
            className='w-full p-3 border border-gray-300 rounded'
          />

          {/* Username Input */}
          <input
            type='text'
            placeholder='Username'
            className='w-full p-3 border border-gray-300 rounded'
          />

          {/* Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded'
          >
            <option value=''>Select Role</option>
            <option value='Owner'>Owner</option>
            <option value='Fleet Manager'>Fleet Manager</option>
            <option value='Supervisor'>Supervisor</option>
            <option value='Analyst'>Analyst</option>
            <option value='Driver'>Driver</option>
          </select>

          {/* Access Level Selection */}
          <select
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded'
          >
            <option value=''>Access Level</option>
            <option value='General Access'>General Access</option>
            <option value='Specialised Access'>Specialised Access</option>
          </select>

          {/* Password Input */}
          <input
            type='password'
            placeholder='Password'
            className='w-full p-3 border border-gray-300 rounded'
          />
          <input
            type='password'
            placeholder='Confirm Password'
            className='w-full p-3 border border-gray-300 rounded'
          />

          {/* Register Button */}
          <button
            onClick={handleLogin}
            className='w-full bg-orange-500 text-white py-3 outline-none border-none hover:outline-none hover:border-none rounded hover:bg-orange-600 transition-colors'
          >
            Register
          </button>

          {/* Navigation to Login */}
          <div className='text-white flex mt-5 items-center justify-center w-full self-center text-sm mx-auto'>
            Already have an account?{" "}
            <span
              onClick={() => handleNavigation("/")}
              className='text-white cursor-pointer ms-1 hover:underline'
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
