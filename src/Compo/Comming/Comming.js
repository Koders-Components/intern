import React, { useState, useEffect } from "react";
import "./Comming.css";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 59, 59).getTime();
    // Set event time to 11:59 PM today
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
  }, []);

  return (
    <div className="coming-soon">
      <div className="content">
        <h1>Coming Soon</h1>
        <p>We're launching something exciting! Stay tuned!</p>
        <div className="timer">
          {timeLeft ? (
            <>
              <div className="time-box">
                <span>{timeLeft.hours}</span>
                <small>Hours</small>
              </div>
              <div className="time-box">
                <span>{timeLeft.minutes}</span>
                <small>Minutes</small>
              </div>
              <div className="time-box">
                <span>{timeLeft.seconds}</span>
                <small>Seconds</small>
              </div>
            </>
          ) : (
            <p>The wait is over!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
