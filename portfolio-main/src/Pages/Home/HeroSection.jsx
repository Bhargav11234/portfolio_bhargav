import { Link } from "react-scroll";
import React from "react";
export default function HeroSection() {
 const containerStyle = {
  border: '2px solid black',
  borderRadius: '10px',
  padding: '20px',
  marginTop:'150px',
  display: 'inline-block',
  backgroundColor: 'white',
};

const smallTextStyle = {
  fontSize: '25px',
  margin: '0',
  textAlign: 'center',
};

const largeTextStyle = {
  fontSize: '45px',
  margin: '0',
  textAlign: 'center',
  fontWeight: 'bold',
};

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
      <div style={containerStyle}>
            <p style={smallTextStyle}>Hello, myself</p>
            <p style={largeTextStyle}>Bhargav Sandis</p>
        </div>
        <br/>
        <br/>
        <div>
        <div style={{
  margin:"40px 70px",
  
  display: 'inline-block', // Allow buttons to sit side-by-side
  padding: '10px 30px ', // Add some padding for content breathing room
  cursor: 'pointer', // Indicate clickable behavior
  border: 'none', // Remove default browser styling
  borderRadius: '5px', // Add rounded corners for a button-like look
  backgroundColor: '#4FE866', // Set a primary button color
  color: 'white', // Set contrasting text color for readability
  fontWeight: 'bold', // Make text appear more prominent
  textDecoration: 'none', // Remove underline from text (common for links)
  transition: 'background-color 0.2s ease-in-out', // Add a smooth hover effect
  textAlign: 'center', // Center text horizontally within the button
}}
>

  <Link style={{textDecoration:"none",color:"white",display: 'inline-block'}}
    activeClass="navbar--active-content"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    to="Contact"
    className="text-md"
  >
    Get In Touch
  </Link>
</div>
        </div>
      </div>
      
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
