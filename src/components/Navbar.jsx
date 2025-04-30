import { useState } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');

    return (
        <nav className='fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <ul className='flex space-x-8'>
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => {
                            const section = item.toLowerCase();
                            return (
                                <li key={item}>
                                    <a
                                        href={`#${section}`}
                                        className={`text-sm font-medium transition-colors ${activeSection === section
                                            ? 'text-sky-400 border-b-2 border-sky-400'
                                            : 'text-white/80 hover:text-sky-400'
                                            }`}
                                        onClick={() => setActiveSection(section)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;