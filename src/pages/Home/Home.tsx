import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="btn btn-two" onClick={() => navigate('/search-users')}>
        <span>SEARCH USERS</span>
      </div>
      <div className="btn btn-one" onClick={() => navigate('/search-repos')}>
        <span>SEARCH REPOSITORIES</span>
      </div>
    </div>
  );
}

export default Home;