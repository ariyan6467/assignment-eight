import React from 'react';
import Banner from '../Banner/Banner';
import Users from '../Users/Users';
import HomeApp from '../HomeApp/HomeApp';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Users></Users>
          <HomeApp></HomeApp>
        </div>
    );
};

export default Home;