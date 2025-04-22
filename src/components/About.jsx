import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/luis.jpg';
import { FaServer, FaUsers } from 'react-icons/fa';

const About = () => {
    const coreStrengths = [
        {
            icon: <FaServer className='w-6 h-6' />,
            title: 'Full-Stack',
            description: 'MERN, Django, REST APIs, WebSockets'
        },
        {
            icon: <FaUsers className='w-6 h-6' />,
            title: 'Collaborative Development',
            description: 'Agile practitioner with SCRUM experience'
        }
    ];

    return (
        <section id='about' className='relative py-20 bg-gradient-to-b from-sky-950/50 to-black overflow-hidden'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='relative group'
                    >
                        <img
                            src={profileImage}
                            alt='Luis Curiel De Sousa'
                            className='rounded-3xl border-4 border-sky-400/20'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='space-y-8'
                    >
                        <h2 className='text-4xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent'>
                            Hi, I am Luis
                        </h2>

                        <p className='text-lg text-gray-300 leading-relaxed'>
                            As a <span className='text-sky-400 font-medium'>full-stack developer</span> with roots in
                            <span className='text-sky-400 font-medium'> systems engineering</span> and <span className='text-sky-400 font-medium'>IT support</span>, I bridge the gap between
                            <span className='text-sky-400 font-medium'> algorithmic rigor</span> and
                            <span className='text-sky-400 font-medium'> human-centered design</span>. My journey spans from
                            simulating RISC-V processors in C++ to building real-time collaborative editors with WebSockets.
                        </p>
                        <p className='text-lg text-gray-300 leading-relaxed'>
                            I bring a strong foundation in algorithms and system design—paired with a hands-on mindset shaped by real-world troubleshooting. I love turning complex challenges into clean, scalable solutions, and I thrive in collaborative, fast-paced environments where learning never stops.

                        </p>

                        <p className='text-lg text-gray-300 leading-relaxed'>
                            Outside of coding, you’ll probably find me outdoors soaking up the sun, working out, diving into a new topic, or marathoning movies.
                        </p>

                        <div className='grid grid-cols-2 gap-4'>
                            {coreStrengths.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    className='p-4 bg-white/5 rounded-xl border border-white/10 hover:border-sky-400/30 transition'
                                >
                                    <div className='flex items-center gap-3 mb-2'>
                                        <div className='text-sky-400'>
                                            {item.icon}
                                        </div>
                                        <h3 className='text-lg font-semibold text-gray-100'>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className='text-sm text-gray-400'>
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className='flex items-center gap-4 text-sm'>
                            <a
                                href='https://drive.google.com/file/d/1L0HP4ab9nyA4hU20XKgPWIjv5MvRXtsd/view?usp=sharing'
                                className='px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-full transition'
                            >
                                View Full Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;