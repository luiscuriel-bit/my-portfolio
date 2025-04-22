import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            icon: <FaCode className='text-2xl text-sky-400' />,
            title: 'Languages',
            items: ['JavaScript', 'Python', 'C/C++', 'HTML5', 'CSS3']
        },
        {
            icon: <FaServer className='text-2xl text-sky-400' />,
            title: 'Frameworks',
            items: ['React', 'Django', 'Node.js', 'Express', 'Flask', 'Bootstrap']
        },
        {
            icon: <FaDatabase className='text-2xl text-sky-400' />,
            title: 'Databases',
            items: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose']
        },
        {
            icon: <FaTools className='text-2xl text-sky-400' />,
            title: 'Tools & Practices',
            items: ['REST APIs', 'WebSockets', 'JWT Auth', 'Agile/SCRUM', 'Linux', 'Git']
        }
    ];

    return (
        <section id='skills' className='py-20 bg-gradient-to-b from-black to-sky-950/30'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-4xl font-bold text-center mb-16 text-sky-400'>Technical Arsenal</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className='bg-black/40 p-6 rounded-xl border border-sky-900 backdrop-blur-sm'
                        >
                            <div className='mb-4 flex items-center gap-3'>
                                {category.icon}
                                <h3 className='text-xl font-semibold text-gray-100'>{category.title}</h3>
                            </div>
                            <ul className='space-y-2'>
                                {category.items.map((item, idx) => (
                                    <li key={idx} className='text-gray-300 text-sm flex items-center gap-2'>
                                        <span className='text-sky-400'>▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;