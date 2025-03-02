import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [tokenz, setTokenz] = useState(state => state);
    const [password, setPassword] = useState(state => state);
    const [status, setStatus] = useState("Verifying...");

    async function handleLogin(){
  

      const response = await fetch('https://qualitydrive.org/api/account/verify-token?token='+(!tokenz)?token:tokenz).then(response =>
       response.text()).then(response => {
     // console.log("this error 2", response);
      
        console.log('Reset successful');
        localStorage.setItem("f-Token", (!tokenz)?token:tokenz);
        setStatus("Token verified. You can reset your password.");
        alert("Token verified. You can reset your password.");
        navigate("/new-password");
    

  
    });
    
   
  
  }

   useEffect(() => {
      if (!token) {
          setStatus("Invalid token.");
          return;
      }

      localStorage.setItem("f-token", token);

      handleLogin();
    // Redirect to the /home route
    
  }, [token]);

  

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
        <span>Enter Token</span>
        </div>
        <div className="bg-[#112445ea] p-8 rounded shadow-lg max-w-sm w-full">
          {/* Email Input */}
          <input
            type="text"
            placeholder="Token"
            value={token}
            onChange={e => setTokenz(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />


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

export default ResetPassword
