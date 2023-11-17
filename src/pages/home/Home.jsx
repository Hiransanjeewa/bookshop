import React from 'react';
import HomeLeft from './HomeLeft'; 
import HomeRight from './HomeRight'; 
import './Home.css'

const Home = () => {
  return (
    <div className="home_Container">
      <div className="left_Section">
        <HomeLeft />
      </div>
      <div className="right_Section">
        <HomeRight />
      </div>
      
    </div>
  );
};

export default Home;
