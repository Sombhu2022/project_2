// src/pages/About.jsx
import React, { useEffect, useState } from 'react';
import './about.scss';  // Ensure you create this stylesheet
import { useSelector } from 'react-redux';
import img from './avter1.jpg'
const About = () => {
  
 const team = [
    {
      "name": "John Doe",
      "department": "Engineering",
      "role": "Software Engineer"
    },
    {
      "name": "Jane Smith",
      "department": "Marketing",
      "role": "Marketing Manager"
    },
    {
      "name": "Alice Johnson",
      "department": "Sales",
      "role": "Sales Representative"
    }
  ]
  

  return (
    <div className="about-container main">
      <header className="about-header">
        <h1>About Local Bazzar</h1>
      </header>
      
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>At Local Bazar, our mission is to connect people with the best local shops and products, making it easy to find what you need right in your neighborhood.</p>
        
        <h2>Our Vision</h2>
        <p>We envision a world where everyone can easily access local businesses, support their communities, and enjoy the benefits of local shopping.</p>
      </section>
      
      <section className="our-story">
        <h2>Our Story</h2>
        <p>Local Bazar was founded with the aim of bringing local businesses into the digital age. We saw the potential to make local shopping more accessible and convenient for everyone.</p>
        <p>Since our inception, we have reached numerous milestones, helping many local shops grow their customer base and thrive in the competitive market.</p>
      </section>
      
      {/* <section className="team">
        <h2>Meet the Team</h2> */}
        {/* <div className="team-members">
           {
            team?.map((ele , index)=>{
               return(<div className="team-member" key={index}>
               <img src={img} alt="Team Member 2" />
               <h3>{ele.name}</h3>
               <p>{ele.department}</p>
               <p>{ele.role}</p>
             </div>)
            })
           } */}

         
          {/* Add more team members as needed */}
        {/* </div>
      </section> */}
      
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Using Local Bazar is simple:</p>
        <ol>
          <li>Search for the products or shops you're interested in.</li>
          <li>Filter by location to find local options.</li>
          <li>Visit the shop's page for more details and offers.</li>
        </ol>
      </section>
      
      <section className="community-impact">
        <h2>Community Impact</h2>
        <p>We are proud to support local businesses and contribute to the growth of local economies. Read our success stories to see how we've made a difference.</p>
      </section>
      
    </div>
  );
};

export default About;
