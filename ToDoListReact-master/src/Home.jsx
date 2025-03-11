import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the ToDo List</h1>
      <div className="button-container">
        <button onClick={() => navigate('/Register')}>Register</button>
        <button onClick={() => navigate('/Login')}>Login</button>
        <button onClick={() => navigate('/App')}>View Tasks</button>
      </div>
    </div>
  );
};

export default Home;