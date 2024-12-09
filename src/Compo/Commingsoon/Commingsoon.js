import React, { useState, useEffect } from "react";
import "./Commingsoon.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { SiGithub } from "react-icons/si";


const ComingSoon = ({ daysFromToday }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysFromToday, // Add the dynamic number of days
      27, 
      40, 
      59 
    ).getTime();
    const currentTime = now.getTime();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [daysFromToday]);

  return (
    <div className="comming_soon">
      <div className="content">
        <h1> VECTOR </h1>
        <div className="timer">
          {timeLeft ? (
            <>
              <div className="Text_size">
                <span>{timeLeft.days}</span>
                <small>d</small>
              </div>
              <div className="Text_size">
                <span>{timeLeft.hours}</span>
                <small>h</small>
              </div>
              <div className="Text_size">
                <span>{timeLeft.minutes}</span>
                <small>m</small>
              </div>
            </>
          ) : (
            <p>Hii this kheni harshil and my working time is over now!</p>
          )}
        </div>
        <div className="Text_title">
             We are comming Soon.
        </div>
        <div className="Comming_email">
            <div className="email">
                Get Notified when we launch
            </div>
            <div className="email_textbox">
                <div className="emailbox">
                    <input type="text" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="Media_icon">
                <RiFacebookFill/>
                <FaTwitter/>
                <FaSnapchatGhost/>
                <RiInstagramFill/>
                <FaLinkedin/>
                <SiGithub/>
        </div>
        <div className="Copyright">
            @ Copyright Greelogix | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
