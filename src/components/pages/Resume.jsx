import '/./src/components/styles/resume.css';



function Resume() {
    const onButtonClick = () => {
        const pdfURL = '/assets/Resume copy.pdf';
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = "Resume copy.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="resume" key="resume-section"> 
        <h1 className='resume h1'>Resume</h1>
        <div>
            <button className="resume-button" onClick={onButtonClick}>Download Resume</button>
        </div>
        <div>
            <h3 className="proficiencies">front end proficiencies:</h3>
            <ul className="proficiency-list">
                <li key="html">HTML</li> 
                <li key="css">CSS</li> 
                <li key="js">JavaScript</li> 
                <li key="jquery">jQuery</li> 
                <li key="responsive-design">responsive design</li> 
                <li key="react">React</li>
            </ul>
            </div>
            <div>
            <h3 className="proficiencies">Back-end Proficiencies:</h3>
            <ul className="proficiency-list">
                <li key="node">Node.js</li> 
                <li key="express">Express</li> 
                <li key="mysql">MySQL, Sequelize</li> 
                <li key="mongodb">MongoDB, Mongoose</li> 
                <li key="rest">REST APIs</li> 
                <li key="graphql">GraphQL</li> 
            </ul>
            </div>
            <div>
            <h3 className="proficiencies">other proficiencies:</h3>
            <ul className='proficiency-list'>
                <li key="git">Git</li>
                <li key="npm">npm</li>
                <li key="DOM">DOM</li>
                <li key="OOP">OOP</li>
                <li key="GitHub">GitHub</li>
                <li key="wireframe">wireframing</li>
                <li key="agile">agile development</li>
                <li key="accessibility">accessibility</li>
                <li key="prompt">Prompt engineering</li>
                <li key="VSC">Visual Studio Code</li>
                <li key="command-line">command-line</li>
                </ul>
                </div>
        </section>
    );
    
}
     
export default Resume;