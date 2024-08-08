"use client"
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: FC<{ title: string; subtitle: string; description: string }> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <section id="hero" className="py-20 bg-[#000000] text-[#faf7f2]">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.p
          className="text-base"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="about"
            smooth
            duration={500}
            className="mt-8 inline-block bg-[#faf7f2] text-[#31312d] py-3 px-6 rounded-lg hover:bg-[#e6e0d4] cursor-pointer"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
