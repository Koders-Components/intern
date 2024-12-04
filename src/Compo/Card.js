import React from 'react';
import './Mix.css';
import First from './First.jpg';
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogo } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

// Array of team members
const teamMembers = [
  {
    name: 'Jenny Wilson',
    title: 'INTERIOR DESIGNER',
    image: First
  },
  {
    name: 'Harshil Patel',
    title: 'SOFTWARE ENGINEER',
    image: First
  },
  {
    name: 'Jane Doe',
    title: 'MARKETING MANAGER',
    image: First
  },
  {
    name: 'John Smith',
    title: 'UI/UX DESIGNER',
    image: First
  }
];

export default function Card() {
  return (
    <div className='mainwrap'>
      <div className='top'>
        <div className='line'></div>
        <div className='tag'>PROFESSIONALS</div>
        <div className='heading'>
           Our Team 
        </div>
      </div>

      <div className='bottom-container'>
        {teamMembers.map((member, index) => (
          <div key={index} className='bottom'>
            <div className='bottom_photo'>
              <img src={member.image} className='firstbottomimg' alt={member.name} />
              <div className='bottom_cont'>
                <div className='bottom_data'>
                  <div className='bottom_media'>
                    <SlSocialFacebook />
                    <PiTwitterLogo />
                    <FiInstagram />
                    <CiLinkedin />
                  </div>
                  <div className='Details'>
                    <p>
                      <j>{member.title}</j> <br /> <k>{member.name}</k>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}