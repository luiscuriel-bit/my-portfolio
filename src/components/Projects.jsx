import React from 'react';

const Projects = () => {
  return (
    <section id='projects'>
        <div>
            <h2>Projects</h2>
            <div>
                <h3>CodeTogether</h3>
                <p>HTML5 | Django | Django REST Framework | Django Channels | WebSockets | Redis | CSS3 | Bootstrap | Netlify | Render/Heroku | PostgreSQL | JWT</p>
                <p>Real-time collaborative code editor for pair programming, with live syncing, user roles, and project-based sessions.</p>
                <a href="https://livecodetogether.netlify.app/">Visit my app</a>
            </div>
            <div>
                <h3>MentorMatch</h3>
                <p>Tech Stack: HTML5 | CSS3 | Bootstrap | EJS | Node.js | Express.js | MongoDB | Mongoose | Express-Session</p>
                <p>Mentorship platform that connects students and mentors for skill development, session scheduling, and resource sharing.</p>
                <a href="https://mentormatch-14e953a4dde1.herokuapp.com/">Visit my app</a>
            </div>
            <div>
                <h3>AirHub</h3>
                <p>Tech Stack: JHTML5 | React.js | CSS3 | Bootstrap | Node.js | Express.js | MongoDB | Mongoose | Netlify | Render/Heroku | JWT</p>
                <p>Flight management app that allows users to search, book, and manage flights, with admin tools for managing schedules and routes.</p>
                <a href="https://airhub-us.netlify.app/">Visit my app</a>
            </div>
            <div>
                <h3>Minesweeper</h3>
                <p>Tech Stack: JavaScript | HTML | CSS | MongoDB</p>
                <p>Web version of the classic Minesweeper game with difficulty levels and a responsive UI.</p>
                <a href="https://luiscuriel-bit.github.io/minesweeper-game/">Visit my app</a>
            </div>
        </div>
    </section>
  );
};

export default Projects;