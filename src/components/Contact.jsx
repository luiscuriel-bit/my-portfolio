import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id='contact' className='px-6 py-20 bg-gradient-to-t from-black to-sky-950/40'>
            <div className='max-w-4xl mx-auto'>
                <motion.div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-sky-400 mb-6'>Let's Connect</h2>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                        Whether you're looking to collaborate, discuss tech, or just say hi - my inbox is always open.
                    </p>
                </motion.div>

                <div className='grid md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <div className='p-4 bg-sky-900/40 rounded-xl'>
                                <FaMapMarkerAlt className='text-2xl text-sky-400' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-100'>Location</h3>
                                <p className='text-gray-300'>West Palm Beach, FL</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='p-4 bg-sky-900/40 rounded-xl'>
                                <FaEnvelope className='text-2xl text-sky-400' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-100'>Email</h3>
                                <a
                                    href='mailto:luiscurieldesousa@gmail.com'
                                    className='text-gray-300 hover:text-sky-400 transition-colors'
                                >
                                    luiscurieldesousa@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center space-y-6'>
                        <h3 className='text-xl font-semibold text-gray-100 mb-4'>Find Me On</h3>
                        <div className='flex flex-col gap-4 w-full max-w-xs'>
                            <a
                                href='https://github.com/luiscuriel-bit'
                                className='flex items-center gap-3 px-6 py-3 bg-sky-900/40 hover:bg-sky-400/20 border border-sky-900 rounded-xl transition-colors'
                            >
                                <FaGithub className='text-2xl text-sky-400' />
                                <span className='text-gray-100'>GitHub</span>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/luiscurieldesousa/'
                                className='flex items-center gap-3 px-6 py-3 bg-sky-900/40 hover:bg-sky-400/20 border border-sky-900 rounded-xl transition-colors'
                            >
                                <FaLinkedin className='text-2xl text-sky-400' />
                                <span className='text-gray-100'>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;