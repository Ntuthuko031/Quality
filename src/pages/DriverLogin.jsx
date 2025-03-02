import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DriverLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(state => state);
  const [code, setCode] = useState(state => state);
    const [password, setPassword] = useState(state => state);
    const [token, setToken] = useState('');
    // State to track current step
    const [step, setStep] = useState(1);

    // Form data state
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      showConditional: false,
      conditionData: '',
      summary: '',
    });

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
          console.log('Login successful');
          navigate("/home");
      }
      });
      
        
    } catch (error) {
        console.error('Login failed', error);
    }

    // Redirect to the /home route
    
  };

    // Handler for input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    // Handlers for navigation
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

  
  const CheckDriver = () => (
    <div className="absolute inset-0 flex flex-col justify-center items-center">
    <div class="bg-[#112445ea] p-8 rounded shadow-lg max-w-sm w-full text-white">
    <h2>Step 1: Basic Information</h2>
    <br/>
    <input
            type="code"
            placeholder="Driver Code"
            onChange={e => setCode(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />
    <br />
   
    <input
            type="email"
            placeholder="Email"
            onChange={e => setUsername(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />
    <br />
    <label>
      Show Conditional Step:
      <input
        type="checkbox"
        name="showConditional"
        checked={formData.showConditional}
        onChange={handleChange}
      />
    </label>
    <br />
    <button onClick={nextStep}>Next</button>
  </div>
  </div>
  )

  const EnterOtp = () => (
    <div className="absolute inset-0 flex flex-col justify-center items-center">
    <div class="bg-[#112445ea] p-8 rounded shadow-lg max-w-sm w-full text-white">
    <h2>Step 2: Enter Otp</h2>
    <br/>
    <input
            type="otp"
            placeholder="Enter OTP"
            onChange={e => setCode(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded text-white"
          />
    <br />
    <button onClick={nextStep} className="mr-2 btn-sm">Resend OTP</button>
    <button onClick={nextStep} className="btn-sm">Submit</button>
  </div>
  </div>
  )


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

      <div>
      {step === 1? <CheckDriver />:''}
      {step === 2? <EnterOtp />:''}
    </div>

      </div>
    </div>
  );
}

export default DriverLogin
