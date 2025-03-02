import { stringify } from "postcss";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddDriver = () => {
  const navigate = useNavigate();
  const [ name, setName ] = useState("");
  const [ surname, setSurname ] = useState("");
  const [ idnumber, setIdnumber ] = useState("");

  const AddNewDriver = async () => {
    const date = new Date();

    var driver =  {Name: name, Surname: surname, IDnumber: idnumber, Admin: localStorage.getItem("authToken"), DateCreated: date};
    await fetch("https://qualitydrive.org/api/driver/New/", {
      method: "POST",
      body: JSON.stringify(driver),
      headers: { "Content-Type": "application/json" },
   }).then(response => response.json()).then(response =>   
     {
     //  if (response.newUserId) {
        //setToken(response.token); // Save the token to state
        //localStorage.setItem('authToken', response.token); // Optionally store token in local storage
       // console.log('Add successful', newUserId);
    //navigate("/driver-profile");
  //  }else(
      console.log("wtf", response)
 //   )
  });

     }


  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-8">
          Driver Profile Creation
        </h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={e => setName(e.target.value)}
              placeholder="Sipho"
              className="mt-1 block w-full p-2 text-white border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              onChange={e => setSurname(e.target.value)}
              placeholder="Khuzwayo"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md  text-white"
            />
          </div>
          <div>
            <label
              htmlFor="idNumber"
              className="block text-sm font-medium text-gray-700"
            >
              ID Number
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              onChange={e => setIdnumber(e.target.value)}
              placeholder="1234567890123"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md  text-white"
            />
          </div>
         
        
          <div className="flex items-end">
           
          </div>
          <br/>
        </form> <button onClick={() => AddNewDriver()}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors"
            >
              Create Driver Profile
            </button>
      </div>
    </div>
  );
}

export default AddDriver;