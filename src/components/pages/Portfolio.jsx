import '/./src/components/styles/portfolio.css';
import project1 from '/src/assets/project1.png'
import project2 from '/src/assets/project2.png'
import project3 from '/src/assets/project3.png'
import project4 from '/src/assets/project4.png'
import project5 from '/src/assets/project5.jpeg'
import project6 from '/src/assets/project6.jpeg'
import Project from '/src/components/pages/project.jsx'




const project = [
    {
        id: 1,
        image: project1,
        title: 'Music Wizard',
        deployedLink: 'https://kagen-smith.github.io/Project-01-Music-Wizard/',
        githubLink: 'https://github.com/Kagen-Smith/Project-01-Music-Wizard',
    },
    {
        id: 2,
        image: project2,
        title: 'README Generator',
        deployedLink: 'https://youtu.be/bfA92zXLDro?si=d-1AhHKKNitTrjTT',
        githubLink: 'https://github.com/Kagen-Smith/nodejs-challenge/tree/main',
    },
    {
        id: 3,
        image: project3,
        title: 'Weather Dashboard',
        deployedLink: 'https://servers-api-challenge.onrender.com/',
        githubLink: 'https://github.com/Kagen-Smith/servers-api-challenge',
    },
    {
        id: 4,
        image: project4,
        title: 'Employee Tracker',
        deployedLink: 'https://youtu.be/a0ji-fyPMS8?si=l5TSXpZPk0UetVHE',
        githubLink: 'https://github.com/Kagen-Smith/sql-project',


    },
    {
        id:5,
        image: project5,
        title: "ReadIt",
        deployedLink: 'https://readit-pngn.onrender.com',
        githubLink: 'https://github.com/Kagen-Smith/ReadIt',
    },
    {
        id:6,
        image: project6,
        title: "MadLibs",
        deployedLink: 'https://project-3-madlibs.onrender.com',
        githubLink: 'https://github.com/Kagen-Smith/project-3-madlibs',
    }
   
    // Add more projects as needed
];

export default function Portfolio() {
    return (
        <section className="portfolio-section">
           <h2>Portfolio</h2>
           <div className="projects-grid">
                {project.map(project => (
                    <Project
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
           </div>
        </section>
    );
}
