import React from 'react';
import './About.css'; 
import ab1 from '../assets/ab1.png'

function About() {
  return (
    <div className='about'>
<div className='about-des'>
    <h2 className='heading pb-[34px]'>About Us</h2>
    <div className='pg ml-2'> 
    <div>TCP Solutions are a European payroll, Compliance and<br /> Contract Employer specialist. <br />
    We have been running for over 25 years and operate in 8 <br /> European countries. <br />
          </div>
          <br />
        
          <span className='pg2'>We have worked with a variety of clients from around the <br /> globe, from some of the top Global Tech Giants, SME's to
           <br/> small family run organisations.</span>
    </div>

        </div>
        <div className="image-about">
            <p>
            <img src={ab1} alt="img202" />
            
            </p>
        </div>
    </div>
    
  )
}

export default About
