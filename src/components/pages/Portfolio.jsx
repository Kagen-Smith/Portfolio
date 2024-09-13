import '/./src/components/styles/portfolio.css';
import project1 from '/src/assets/project1.png'
import project2 from '/src/assets/project2.png'

function Portfolio() {
    const state = [
        {
            name: 'Music Wizard',
            image: project1,
            description: 'A website that can create a playlist from a preselceted list of songs.',
            link: 'https://kagen-smith.github.io/Project-01-Music-Wizard/',
            repo: 'https://github.com/Kagen-Smith/Project-01-Music-Wizard/'
        },
        {
            name: 'README.md Generator',
            image: project2,
            description: 'this is a command line application that generates a README.md file for a project.',
            instructionLink: 'https://www.youtube.com/watch?v=bfA92zXLDro',
            repo: 'https://github.com/Kagen-Smith/nodejs-challenge/'
        },
  
    ]; 

    return (
        <section className='portfolio-section'>
        <div>
            <h1 className='portfolio-section h1'>Portfolio</h1>
            {state.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} className='.project-image' />
                    <p>{project.description}</p>
                    <a href={project.link}>Link to the project</a>
                    <a href={project.repo}>Link to the repo</a>
                </div>
            ))}
        </div>
        </section>
    );
}

export default Portfolio;