import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import codetogetherImg from "../assets/codetogether.png";
import mentormatchImg from "../assets/mentormatch.png";
import airhubImg from "../assets/airhub.png";
import minesweeperImg from "../assets/minesweeper.png";

const fullstackProjects = [
    {
        title: "CodeTogether",
        image: codetogetherImg,
        description: "Real-time collaborative code editor for pair programming, with live syncing, user roles, and project-based sessions.",
        tech: "Django, Channels, WebSockets, Redis, PostgreSQL, React",
        code: "https://github.com/luiscuriel-bit/codetogether-front-end",
        demo: "https://livecodetogether.netlify.app/",
    },
    {
        title: "MentorMatch",
        image: mentormatchImg,
        description: "Mentorship platform that connects students and mentors for skill development, session scheduling, and resource sharing.",
        tech: "Node, Express, MongoDB, EJS, Bootstrap",
        code: "https://github.com/luiscuriel-bit/mentormatch",
        demo: "https://mentormatch-14e953a4dde1.herokuapp.com/",
    },
    {
        title: "AirHub",
        image: airhubImg,
        description: "Flight management app to search, book, and manage flights. Includes admin panel for schedule and route control.",
        tech: "React, Node, Express, MongoDB, Bootstrap",
        code: "https://github.com/luiscuriel-bit/airhub-front-end",
        demo: "https://airhub-us.netlify.app/",
    },
    {
        title: "MineSweeper",
        image: minesweeperImg,
        description: "Web version of the classic Minesweeper game with difficulty levels and responsive UI.",
        tech: "JavaScript, HTML, CSS, MongoDB",
        code: "https://github.com/luiscuriel-bit/minesweeper-game",
        demo: "https://luiscuriel-bit.github.io/minesweeper-game/",
    },
];

const otherProjects = [
    {
        title: 'RISC-V Processor Simulator',
        tech: 'C++ | SystemC',
        description:
            'Cycle-accurate simulation of RISC-V datapath executing assembly programs. Implemented low-level components like Control Unit and Register File using logic gates.',
        code: 'https://github.com/luiscuriel-bit/RISC-V-Datapath',
        demo: null
    },
    {
        title: 'Video Game Rental System',
        tech: 'C++ | Hash Tables | File I/O',
        description:
            'Console-based CRUD system with fast lookup via hash tables and persistent storage using text files.',
        code: null,
        demo: null
    },
    {
        title: 'Shopping Mall Directory',
        tech: 'JavaScript | HTML | CSS',
        description:
            'Collaborative system to manage mall services using SCRUM, RBAC and BlueWatch methodology.',
        code: null,
        demo: null
    },
    {
        title: 'Pong Clone',
        tech: 'C | Allegro | Game Loop | AABB',
        description:
            'Classic Pong with structured input-process-render stages and collision detection logic.',
        code: 'https://github.com/luiscuriel-bit/Pong.',
        demo: null
    },
    {
        title: 'Flappy Bird Clone',
        tech: 'C++ | SFML | State Pattern',
        description:
            'Flappy Bird remake with multiple difficulties, using state-driven logic and event handling.',
        code: 'https://github.com/luiscuriel-bit/Flappy-Bird',
        demo: null
    },
    {
        title: 'Breakout Game',
        tech: 'Python | Pygame | Command & Observer',
        description:
            'Modular Breakout clone with procedural level generation, save data system and design patterns.',
        code: 'https://github.com/luiscuriel-bit/Breakout',
        demo: null
    },
    {
        title: 'Match-3 Puzzle Game',
        tech: 'Python | Pygame',
        description:
            'Candy Crush-style game with intuitive drag-drop mechanics and match logic.',
        code: 'https://github.com/luiscuriel-bit/Match-3',
        demo: null
    },
];

const Projects = () => {
    const [active, setActive] = useState('fullstack');

    return (
        <section id="projects" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12 text-sky-400"
                >
                    My Work
                </motion.h2>

                <div className="flex justify-center mb-12 gap-4">
                    {['fullstack', 'other'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setActive(type)}
                            className={`px-6 py-2 rounded-full transition-all ${active === type
                                ? 'bg-sky-600 text-white shadow-lg'
                                : 'bg-white/5 text-sky-300 hover:bg-white/10'
                                }`}
                        >
                            {type === 'fullstack' ? 'Featured Projects' : 'Other Projects'}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {(active === "fullstack" ? fullstackProjects : otherProjects).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-sky-400/30 transition-all min-h-[400px] flex flex-col"
                        >
                            <div className="relative overflow-hidden h-48 flex-shrink-0">
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </>
                                ) : (
                                    <div className="h-full bg-sky-900/20 flex items-center justify-center">
                                        <span className="text-sky-400 text-4xl">🧩</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-sky-400">{project.title}</h3>
                                <p className="text-sm text-sky-300/80 mb-3 font-mono">
                                    {project.tech}
                                </p>
                                <p className="text-white/90 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex gap-3 mt-auto">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Demo
                                        </a>
                                    )}
                                    {project.code && (
                                        <a
                                            href={project.code}
                                            className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                                        >
                                            <FaGithub className="text-xs" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;