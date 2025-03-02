import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(state => state);
    const [password, setPassword] = useState(state => state);
    const [token, setToken] = useState('');


    const UserInfo = (g) => {
    
      fetch('https://qualitydrive.org/api/account/checkToken/?authToken='+g) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {localStorage.setItem('u-Token', data.userId);})
      .catch(error => console.error('Error fetching users:', error));
    
    }

  async function handleLogin(){
  

    //e.preventDefault();

    try {
     
   const response = await fetch('https://qualitydrive.org/api/account/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "Username": username, "Password": password })
      }).then(response => response.json()).then(response => {
       // console.log("this error 2", response);
        if (response.token) {
          setToken(response.token); // Save the token to state
          localStorage.setItem('authToken', response.token); // Optionally store token in local storage
          UserInfo(response.token);
          navigate("/home");
      }else{
          console.log('Login unsuccessful', response);
      }
      });
      
        
    } catch (error) {
        console.error('Login failed', error);
    }

    // Redirect to the /home route
    
  };



  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/transport.png"
        alt="Transport Background"
        className="absolute h-full w-full object-fill"
      />

      {/* Overlay with Form */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">

      <div className="w-80 mb-4 p-2 bg-white text-center hidden">
        <span>Please check Username or Password</span>
        </div>
        <div className="bg-[#112445ea] p-8 rounded shadow-lg max-w-sm w-full">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            onChange={e => setUsername(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />

          {/* Forgot Password Link */}
          <div className="text-left text-sm mb-4">
            <a href="#" className="text-white  hover:text-white" onClick={e => navigate("forgot-password")}>
              Forgot Password?{" "}
              <span className="hover:underline"> click here </span>
            </a>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-3 outline-none border-none hover:outline-none hover:border-none rounded hover:bg-orange-600 transition-colors"
          >
            Log In
          </button>

          
          <div className='text-white flex mt-5 items-center justify-center w-full self-center text-sm mx-auto'>
            Don't have an account?{" "}
            <span
              onClick={() => handleNavigation("/register")}
              className='text-white cursor-pointer ms-1 hover:underline'
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
