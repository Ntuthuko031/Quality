import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const NewPasssword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(state => state);
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState(state => state);
    
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
     
      setToken(localStorage.getItem("f-Token"));

    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("https://qualitydrive.org/api/account/new-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "Token": token , "Password": password }),
            }).then(response => response.text()).then(response => {
              alert("Password reset successfully! You can now log in.", response);
              setMessage("Password reset successfully! You can now log in.");
              navigate("/");
            });

         } 
         catch (error) {
            alert(error.message || "Something went wrong.");
            setMessage(error.message || "Something went wrong.");
        }
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
        <span>Enter New Password</span>
        </div>
        <div className="bg-[#112445ea] p-8 rounded shadow-lg max-w-sm w-full">
         

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            onChange={e => setPassword2(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />


          {/* Login Button */}
          <button
            onClick={(e)=>handleSubmit(e)}
            className="w-full bg-orange-500 text-white py-3 outline-none border-none hover:outline-none hover:border-none rounded hover:bg-orange-600 transition-colors"
          >
            Set New Password
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

export default NewPasssword
