import React from "react";
import styles from "./Hero.module.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import images from "../../data/heroImagesData";
import dgicmr from "../../images/directors/dr_rajeev_bahal.jpg";
import dicmr_njil from "../../images/directors/dr_shalini_singh.jpg";

const data = [
  {
    title: "DIRECTOR GENERAL ICMR",
    name: "Dr. Rajiv Bahl",
    image: dgicmr,
    text: "Secretary to Government of India, Department of Health Research and Director General, Indian Council of Medical Research",
  },
  {
    title: "DIRECTOR ICMR-NJIL&OMD",
    name: "Dr. Shalini Singh",
    image: dicmr_njil,
    text: `ICMR-National JALMA Institute for Leprosy and Other Mycobacterial Diseases (ICMR-NJIL&OMD), Agra was originally established by the Japan Leprosy Mission for Asia (JALMA), a trust of the people of Japan for serving leprosy patients in India in the year 1963.`,
  },
];

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
        {data.map((ele, index) => {
          return (
            <div className={styles.director}>
              <div className={styles.title}>{ele.title}</div>
              <div className={styles.directorImageContainer}>
                <img src={ele.image} alt={ele.title} />
              </div>
              <div>
                <div className={styles.name}>{ele.name}</div>
                <div className={styles.text}>{ele.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
