// frontend/src/components/SignUp.js
import React, { useState } from 'react'; // Importing React and useState hook
import axios from 'axios'; // Importing axios to make HTTP requests


const Signup = () => {

  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

 // Function to handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault(); // Preventing form from submitting the default way
  try {
    // Sending a POST request to signup route
    await axios.post('http://localhost:5000/api/auth/signup', { username, password });
    alert('User created');
  } catch (error) {
    alert('Error creating user');
  }
};

  return (

    <>
    <div className='w-[720px] border rounded px-5 mx-auto'>

    <form onSubmit={handleSubmit}>
    <h2 className=' border-teal-950 my-2 font-bold'>Sign Up Form</h2>
    <input className='w-[90%] rounded-[10px] outline-none'
      type="text"
      placeholder="Username" 
      value={username}
      onChange={(e) => setUsername(e.target.value)} // Setting username state
      />
    <input className='w-[90%] rounded-[10px] outline-none my-2'
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} // Setting password state
      />
    <button className='block w-[50%] text-white rounded p-1 m-2 mx-auto bg-violet-950' type="submit">Sign Up</button>
  </form>
      </div>
      </>
);

  
};

export default Signup; // Exporting the component