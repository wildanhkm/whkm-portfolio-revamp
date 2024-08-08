"use client"
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Contact: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-base mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="hero"
            smooth
            duration={500}
            className="inline-block bg-[#000000] text-[#faf7f2] py-3 px-6 rounded-lg hover:bg-[#151410] cursor-pointer"
          >
            Back to Top
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
