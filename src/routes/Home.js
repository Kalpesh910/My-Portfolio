import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg'
// import Footer from '../components/Footer';
import Project from './Project';
const Home = () => {
  return <div>
    <Navbar/>
    <HeroImg />
    <Project />
    {/* <Footer /> */}
  </div>
};

export default Home