import React from "react";
import "../styles/franchisesuccess.css";
import franchisesuccess1 from "../Assets/franchise-img/franchisesuccess1.webp";
import Slider from "react-slick";

const FranchiseSlider = () => {
  // Declare the slides array first
  const baseContent = (
    <p>
      “ Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
      mattis est velit in. Nibh in purus sit convallis phasellus ut.
      At vel erat ultricies commodo. Neque suspendisse a{" "}
      habitasse commodo. ”
      <br />
      <span>
        Marie Poirot, <br />
        Bigapp
      </span>
    </p>
  );

  const slides = [
    {
      image: franchisesuccess1,
      content: baseContent,
    },
    {
      image: franchisesuccess1,
      content: baseContent,
    },
    {
      image: franchisesuccess1,
      content: baseContent,
    },
    {
      image: franchisesuccess1,
      content: baseContent,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="franchisesuccess-slider-container">
      <Slider {...settings} className="franchisesuccess-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="franchisesuccess-slider-item"
            data-aos="fade-up" // AOS animation
            data-aos-delay={index * 100} // Corrected template literal usage
          >
            <div className="franchisesuccess-image-container">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`} // Corrected alt attribute
                className="franchisesuccess-slider-image"
                loading="lazy"
              />
            </div>
            <div className="franchisesuccess-content-container">
              <div className="franchisesuccess-text-content">
                <h2> Success Stories</h2>
                {slide.content}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FranchiseSlider;
