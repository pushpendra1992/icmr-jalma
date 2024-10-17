import React from "react";
import styles from "./Hero.module.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import images from "../../data/heroImagesData";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((slide, i) => (
            <Carousel.Item key={i}>
              <img
                className={styles.carouselItem}
                src={slide.image}
                alt={slide.caption || "slider image"}
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={styles.directorSection}>
        <div className={styles.director}>
            
        </div>
        <div className={styles.director}></div>
      </div>
    </div>
  );
};

export default Hero;
