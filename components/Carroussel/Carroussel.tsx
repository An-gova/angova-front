"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Carroussel.module.css";

const Carroussel = () => {
  const [current, setCurrent] = useState(0);
  const imagesList = [
    "/flags/rounded/france.png",
    "/flags/rounded/spain.png",
    "/flags/rounded/uk.png",
    "/flags/rounded/morocco.png",
    "/flags/rounded/turkey.png",
    "/flags/rounded/ukraine.png",
  ];

  const totalImages = imagesList.length;

  const nextSlide = () => {
    setCurrent((current + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + totalImages) % totalImages);
  };

  const displayImages = () => {
    const displayOrder = [];
    for (let i = 0; i < 5; i++) {
      const index = (current + i) % totalImages;
      displayOrder.push(imagesList[index]);
    }
    return displayOrder;
  };

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ x: [-3, 3, -3], y: [0, 0, 0], rotate: [0, 0, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronLeft size={30} color="black" />
        </motion.button>
        <div className={styles.carouselItems}>
          {displayImages().map((image, index) => (
            <motion.div key={index} className={styles.carouselItem}>
              <Image
                src={image}
                alt=""
                width={100}
                height={100}
                priority={true}
              />
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ x: [3, -3, 3], y: [0, 0, 0], rotate: [0, 0, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight size={30} color="black" />
        </motion.button>
      </div>
    </section>
  );
};

export default Carroussel;
