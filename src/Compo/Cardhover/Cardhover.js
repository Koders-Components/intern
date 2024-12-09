import React from 'react';
import './Cardhover.css';

const App = () => {
  const cards = [
    {
      title: 'Exploring the Cosmos',
      description: 'Dive into the mysteries of the universe with breathtaking views.',
      bgImage: './assets/images/cosmos.jpg',
    },
    {
      title: 'Nature Adventures',
      description: 'Discover the beauty of nature and explore its vibrant landscapes.',
      bgImage: './assets/images/nature.jpg',
    },
    {
      title: 'Ocean Depths',
      description: 'Uncover the secrets hidden beneath the waves of the deep sea.',
      bgImage: './assets/images/ocean.jpg',
    },
    {
      title: 'Urban Explorations',
      description: 'Experience the charm of cityscapes from around the world.',
      bgImage: './assets/images/urban.jpg',
    },
    {
      title: 'Mountain Peaks',
      description: 'Reach new heights with scenic mountain views.',
      bgImage: './assets/images/hill.jpg',
    },
    {
        title: 'Plant Peaks',
        description: 'multicellular organisms that are part of the biological kingdom Plantae.',
        bgImage: './assets/images/plant.jpg',
    },
  ];

  return (
    <div className="containerhover">
      <h1 className="header-title">Dynamic Cards with Backgrounds</h1>
      <p className="header-description">
        Hover over the cards to see the magic!
      </p>

      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card_dtl" key={index}>
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            ></div>
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;