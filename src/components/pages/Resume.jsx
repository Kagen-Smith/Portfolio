import '/./src/components/styles/resume.css';



function Resume() {
    return [
        <section className="resume" key="resume-section"> 
        <h1>Resume</h1>
        <div>
            <h2 className="resume-link">download my <a href="../../assets/Profile.pdf" download="Profile.pdf">resume</a></h2>
        </div>
            <h3 className="proficiencies">front end proficiencies:</h3>
            <ul className="proficiency-list">
                <li key="html">HTML</li> 
                <li key="css">CSS</li> 
                <li key="js">JavaScript</li> 
                <li key="jquery">jQuery</li> 
                <li key="responsive-design">responsive design</li> 
                <li key="react">React</li>
            </ul>
            <h3 className="proficiencies">Back-end Proficiencies:</h3>
            <ul className="proficiency-list">
                <li key="apis">APIs</li> 
                <li key="node">Node</li> 
                <li key="express">Express</li> 
                <li key="mysql">MySQL, Sequelize</li> 
                <li key="mongodb">MongoDB, Mongoose</li> 
                <li key="rest">REST</li> 
                <li key="graphql">GraphQL</li> 
            </ul>
        </section>
    ];
    
}
     
export default Resume;