"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./slideshow.module.css";
import alTeatro from "../../assets/al-teatro.webp";
import trePini from "../../assets/tre-pini.webp";
import esc from "../../assets/esc.webp";
import leftArrow from "../../assets/left-arr.svg";
import rightArrow from "../../assets/right-arr.svg";

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const imagesInfo = [
    {
      src: esc,
      captionTitle: "ESC Corporation",
      captionText: "eCommerce",
    },
    {
      src: trePini,
      captionTitle: "Tre Pini",
      captionText: "Sito Web",
    },
    {
      src: alTeatro,
      captionTitle: "Al Teatro",
      captionText: "Sito Web",
    },
  ];

  const slideshowImages = imagesInfo.map((imageInfo) => imageInfo.src);

  function nextImage() {
    setDirection(1);
    setCurrentImage((currentImage + 1) % slideshowImages.length);
  }

  function previousImage() {
    setDirection(-1);
    setCurrentImage(
      (currentImage - 1 + slideshowImages.length) % slideshowImages.length
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.slideshow}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Image
            src={slideshowImages[currentImage]}
            alt="Test"
            layout="responsive"
          />
        </div>
        <div
          key={currentImage}
          initial={{ opacity: 0, x: 100 * direction }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 * direction }}
          transition={{ duration: 0.3 }}
          className={styles["slideshow-caption"]}
        >
          <button onClick={previousImage}>
            <Image src={leftArrow} alt="Left Arrow Nav" />
          </button>
          <div>
            <h3>{imagesInfo[currentImage].captionTitle}</h3>
            <p>{imagesInfo[currentImage].captionText}</p>
          </div>
          <button onClick={nextImage}>
            <Image src={rightArrow} alt="Right Arrow Nav" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
