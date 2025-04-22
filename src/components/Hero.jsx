import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section 
            id='hero' 
            className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-sky-950 to-black overflow-hidden'
        >
            <div className='absolute inset-0 opacity-10'>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjMzQ3OGE4IiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4=')]" />
            </div>

            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-center'
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className='text-sky-400 font-mono mb-4 text-lg'
                    >
                        Hi, my name is
                    </motion.p>
                    
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='text-4xl md:text-6xl font-bold text-white mb-6'
                    >
                        Luis Curiel De Sousa
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed'
                    >
                        I'm a <span className='text-sky-400'>Full-Stack Developer</span> passionate about creating 
                        impactful solutions that blend technical excellence with 
                        <span className='text-sky-400'> human-centered design</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'
                    >
                        <a
                            href='#projects'
                            className='flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full 
                            transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-900/50'
                        >
                            View My Work
                        </a>
                        
                        <a
                            href='#contact'
                            className='flex items-center gap-2 px-8 py-4 border-2 border-sky-600 text-sky-400 hover:bg-sky-900/30 
                            rounded-full transition-all duration-300 hover:scale-105'
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className='flex justify-center gap-6 text-2xl mb-16'
                    >
                        <a
                            href='https://github.com/luiscuriel-bit'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-sky-400 transition-colors'
                        >
                            <FaGithub />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/luiscurieldesousa/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-sky-400 transition-colors'
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href='mailto:luiscurieldesousa@gmail.com'
                            className='text-gray-400 hover:text-sky-400 transition-colors'
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 1.4,
                            repeat: Infinity,
                            repeatType: 'mirror'
                        }}
                        className='absolute bottom-8 left-1/2 -translate-x-1/2'
                    >
                        <FaArrowDown className='text-3xl text-sky-400 animate-bounce' />
                    </motion.div>
                </motion.div>
            </div>

            <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent' />
        </section>
    );
};

export default Hero;