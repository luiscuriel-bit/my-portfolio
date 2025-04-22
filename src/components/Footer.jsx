import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black/80 backdrop-blur-md border-t border-white/10'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <p className='text-sm text-white/70 order-2 md:order-1'>
                        &copy; {new Date().getFullYear()} Luis Curiel. All rights reserved.
                    </p>

                    <div className='flex gap-4 order-1 md:order-2'>
                        <a
                            href='https://github.com/luiscuriel-bit'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white/70 hover:text-sky-400 transition-colors'
                        >
                            <FaGithub className='text-xl' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/luiscurieldesousa/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white/70 hover:text-sky-400 transition-colors'
                        >
                            <FaLinkedin className='text-xl' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;