import React, { useState } from 'react';
import axios from 'axios';

function Login({ setPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/login', { username, password });
      alert(res.data.message);
      localStorage.setItem("userId", res.data.userId);
      setPage('home');
    } catch (err) {
      alert(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="container mt-5" style={{padding:'5px'}}>
      <div className="card shadow-lg p-4">
        <h2 className="text-center">Login</h2>
        <input className="form-control my-2" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" className="form-control my-2" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
        <button className="btn btn-link w-100 mt-2" onClick={() => setPage('register')}>Register</button>
      </div>
    </div>
  );
}

export default Login;
