import '/./src/components/styles/portfolio.css';
import project1 from '/src/assets/project1.png'
import project2 from '/src/assets/project2.png'
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
