function Portfolio() {
    const state = [
        {
            name: 'Music Wisard',
            description: 'A website that can create a playlist from a preselceted list of songs.',
            link: 'https://kagen-smith.github.io/Project-01-Music-Wizard/',
            repo: 'https://github.com/Kagen-Smith/Project-01-Music-Wizard/'
        },
  
    ]; 

    return (
        <div>
            <h1>Portfolio</h1>
            {state.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link}>Link to the project</a>
                    <a href={project.repo}>Link to the repo</a>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;