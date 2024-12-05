import React from "react";
import "./Mix.css";

export default function Pricing() {
  return (
    <div className="pricing-container">
      <div className="top-section">
        <div className="line"></div>
        <div className="tag">PRICING PLAN</div>
        <h1>Choose Your Perfect Plan</h1>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card basic">
          <h2>Basic</h2>
          <h3>Free</h3>
          <p>Standard listing submission, active for 30 days.</p>
          <ul>
            <li>Web Optimized</li>
            <li>Free Server Domain</li>
            <li>Mobile Optimized</li>
            <li>Outstanding Support</li>
          </ul>
          <button type='submit'>CHOOSE PLAN</button>
        </div>

        <div className="pricing-card professional">
          <div className="most-popular">MOST POPULAR</div>
          <h2>Professional</h2>
          <h3>$599.95</h3>
          <p>Standard listing submission, active for 30 days.</p>
          <ul>
            <li>Web Optimized</li>
            <li>Free Server Domain</li>
            <li>Mobile Optimized</li>
            <li>Outstanding Support</li>
          </ul>
          <button type='submit'>CHOOSE PLAN</button>
        </div>

        <div className="pricing-card business">
          <h2>Business</h2>
          <h3>$999.95</h3>
          <p>Standard listing submission, active for 30 days.</p>
          <ul>
            <li>Web Optimized</li>
            <li>Free Server Domain</li>
            <li>Mobile Optimized</li>
            <li>Outstanding Support</li>
          </ul>
          <button type='submit'>CHOOSE PLAN</button>
        </div>
      </div>
    </div>
  );
}
