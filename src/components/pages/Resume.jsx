import '/./src/components/styles/resume.css';
import '../../assets/resume-8zclmemg.pdf'


function Resume() {

    return (
        <section className="resume" key="resume-section"> 
        <h1 className='resume h1'>Resume</h1>
        <div>
            <h3>Download</h3>
            <p>My resume:</p>
            <a 
            href="src/assets/resume-8zclmemg.pdf"
            download = "resume-8zclmemg.pdf"
            >Download</a>
        </div>
        <div>
            <h3 className="proficiencies">front end proficiencies:</h3>
            <ul className="proficiency-list">
                <li key="html">HTML</li> 
                <li key="css">CSS</li> 
                <li key="js">JavaScript</li> 
                <li key="jquery">jQuery</li> 
                <li key="responsive-design">responsive design</li> 
                <li key="react">React.js</li>
                <li key="bootstrap">Bootstrap</li>
                <li key="web-apis">Web APIs</li>
                <li key="ajax">AJAX</li>
                <li key="typescript">TypeScript</li>
            </ul>
            </div>
            <div>
            <h3 className="proficiencies">Back-end Proficiencies:</h3>
            <ul className="proficiency-list">
                <li key="node">Node.js</li> 
                <li key="express">Express</li> 
                <li key="sql">SQL, Sequelize</li> 
                <li key="mongodb">MongoDB, Mongoose</li> 
                <li key="rest">REST APIs</li> 
                <li key="graphql">GraphQL</li> 
                <li key="apollo">Apollo Server</li>
                <li key="authentication">JWT</li>
                <li key="bcrypt">bcrypt</li>
                <li key="graphQL">GraphQL</li>
                <li key="postgresql">PostgreSQL</li>
                <li key="noSQL">NoSQL</li>
                <li key="API">APIs</li>

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
                <li key="testing">testing</li>
                <li key="debugging">debugging</li>
                <li key="continuous-integration">continuous integration</li>
                <li key="continuous-deployment">continuous deployment</li>
                <li key="prompt engineering">prompt engineering</li>
                <li key="agile methodologies">agile methodologies</li>
                <li key="responsive design">responsive design</li>
                </ul>
                </div>
        </section>
    );
    
}
     
export default Resume;