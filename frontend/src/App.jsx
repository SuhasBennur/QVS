import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Policy from './components/Policy';
import AppNavbar from './components/Navbar';
// --------------
function App() {
  const [page, setPage] = useState('login');
  const isLoggedIn = !!localStorage.getItem("userId");
  return (
    <>
      <AppNavbar setPage={setPage} page={page} isLoggedIn={isLoggedIn}  />
      {page === 'login' && <Login setPage={setPage} />}
      {page === 'register' && <Register setPage={setPage} />}
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <About setPage={setPage} />}
      {page === 'policy' && <Policy setPage={setPage} />}
    </>
  );
}

export default App;
