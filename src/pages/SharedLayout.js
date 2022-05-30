import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import React from "react";
// import StyledNavbar from '../components/StyledNavbar';
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <StyledNavbar /> */}
      <Outlet />
    </>
  );
};
export default Home;
