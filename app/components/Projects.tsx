'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectType = {
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
};

const Projects: FC<ProjectType> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-[#292923] text-[#faf7f2]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Recent Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#151410] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                objectFit="contain"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
