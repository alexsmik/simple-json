import { Link } from 'react-router-dom';
import React from 'react';
const About = () => {
  return (
    <section className="section">
      <h2>Shopping Cart for eCommerce App</h2>
      <Link to="/products" className="btn">
        Start shopping!
      </Link>
    </section>
  );
};
export default About;
