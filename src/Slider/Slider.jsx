import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Slider.module.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 1.5 seconds (1500 milliseconds)
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  // Add background color to the first word of the description
  const formatDescription = (description) => {
    const words = description.split(' ');
    return (
      <span>
        <span className={styles.highlight}>{words[0]}</span> {words.slice(1).join(' ')}
      </span>
    );
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContent}>
        {/* Left side: Content */}
        <div className={styles.content}>
          <div className={styles.description}>{formatDescription(slides[currentIndex].description)}</div>
          <div className={styles.heading}>{slides[currentIndex].title}</div>
          <Link href="/Services.html" className={styles.learnMoreButton} >Learn More</Link>
        </div>

        {/* Right side: Image */}
        <div className={styles.imageContainer}>
          <Image
            src={slides[currentIndex].image}
            alt="slider"
            className={styles.sliderImage}
            width={600}    
            height={400}   
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
