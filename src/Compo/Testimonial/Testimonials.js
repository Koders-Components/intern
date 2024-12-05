import React from "react";
import Slider from "react-slick";
import "./Testimonial.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      name: "Marvin McKinney",
      photo: './assets/images/Slider_photo.jpg',
      title: "Designer",
      description:
        "Ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget rhoncus, amet sem vel quam nunc semper libero.",
    },
    {
      id: 2,
      name: "Theresa Webb",
      photo: './assets/images/Slider_photo1.jpg',
      title: "Host",
      description:
        "Ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget rhoncus, amet sem vel quam nunc semper libero.",
    },
    {
      id: 3,
      name: "Robert Fox",
      photo: './assets/images/Slider_photo2.jpg',
      title: "Reporter",
      description:
        "Ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget rhoncus, amet sem vel quam nunc semper libero.",
    },
    {
      id: 4,
      name: "Alice Johnson",
      photo: './assets/images/Slider_photo3.jpg',
      title: "Photographer",
      description:
        "Ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget rhoncus, amet sem vel quam nunc semper libero.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="outer_slider">
        <div className="top-section">
            <div className="line"></div>
            <div className="tag">TESTIMONIALS</div>
            <h1>Our Happy Clients</h1>
        </div>
        <div className="slider-container">
        <Slider {...settings}>
            {cards.map((card) => (
            <div key={card.id} className="slider-card">
                <div className="card-content">
                <p className="card-description">{card.description}</p>
                <div className="card-profile">
                    <img src={card.photo} alt={card.name} className="card-photo" />
                    <div>
                    <h3 className="card-name">{card.name}</h3>
                    <p className="card-title">{card.title}</p>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
    </>
  );
};

export default CardSlider;