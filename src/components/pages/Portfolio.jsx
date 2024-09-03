import '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/styles/portfolio.css';
import project1 from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/assets/project1.png'

const styles = {
    image: { width: '200px', 
            height: '200px'},
    project: { display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black',
                margin: '10px',
                padding: '10px',
                width: '50%',
                backgroundColor: 'darkblue',
},
text : { color: 'white' }
};
function Portfolio() {
    const state = [
        {
            name: 'Music Wizard',
            image: project1,
            description: 'A website that can create a playlist from a preselceted list of songs.',
            link: 'https://kagen-smith.github.io/Project-01-Music-Wizard/',
            repo: 'https://github.com/Kagen-Smith/Project-01-Music-Wizard/'
        },
  
    ]; 

    return (
        <div>
            <h1>Portfolio</h1>
            {state.map((project, index) => (
                <div style={styles.project} key={index}>
                    <h3 style={styles.text}>{project.name}</h3>
                    <img src={project.image} alt={project.name} style={styles.image}/>
                    <p style={styles.text}>{project.description}</p>
                    <a href={project.link}style={styles.text}>Link to the project</a>
                    <a href={project.repo}style={styles.text}>Link to the repo</a>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;