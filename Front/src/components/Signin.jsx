import React, { useState } from 'react'; // Importing React and useState hook
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for redirection

const Signin = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook for navigation
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing form from submitting the default way

    const response = await fetch('http://localhost:5000/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token); // Storing the token in localStorage
      alert('Logged in'); // Alerting the user that he has logged in successfully
      navigate('/dashboard'); // Redirecting to the dashboard
    }

else{
  alert('Error logging in'); // Alerting the user that he has not logged in successfully
}

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Setting username state
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Setting password state
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signin; // Exporting the component