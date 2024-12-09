import React from "react";
import "./Divine.css";
import Card from './Dcard';

function App() {
  return (
    <div className="cosmic-container">
      <h1 className="header-title">Unlocking Cosmic Wisdom</h1>
      <p className="header-description">Cras sed rhoncus risus, non accu cenas fareta.</p>
      <div className="card-container">
        <Card
          title="Relationship Counselling"
          icon="🌙"
          description="Duis id lacinia lectus, sit amet lobortis turpis. Ut eto."
          hoverImage='./assets/images/slider_photo.jpg'
        />
        <Card
          title="Natal Chart Readings"
          icon="🖐️"
          description="Duis id lacinia lectus, sit amet lobortis turpis. Ut eto."
          hoverImage='./assets/images/slider_photo.jpg'
        />
        <Card
          title="Forecast Readings"
          icon="📅"
          description="Duis id lacinia lectus, sit amet lobortis turpis. Ut eto."
          hoverImage='./assets/images/slider_photo.jpg' 
        />
        <Card
          title="Career Guidance"
          icon="🧭"
          description="Duis id lacinia lectus, sit amet lobortis turpis. Ut eto."
          hoverImage='./assets/images/slider_photo.jpg'
        />
      </div>
    </div>
  );
}

export default App;
