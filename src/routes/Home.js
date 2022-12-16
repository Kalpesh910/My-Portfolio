import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
// import Resume from './Resume';
// import Footer from '../components/Footer';
import Project from './Project';
const Home = () => {
  return <div>
    <Navbar/>
    <HeroImg />
    <Project />
    {/* <Resume /> */}
    {/* <Footer /> */}
  </div>
};

export default Home