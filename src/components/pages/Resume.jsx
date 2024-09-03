import '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/styles/resume.css';

function Resume() {
    return [
        <section className="resume">
        <h1>Resume</h1>
        <div>
            <h2 className="resume-link">download my <a href="../../assets/Profile.pdf" download="Profile.pdf">resume</a></h2>
        </div>
            <h3 className="proficiencies">front end proficiencies:</h3>
            <ul className="proficiency-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3 className="proficiencies">Back-end Proficiencies:</h3>
            <ul className="proficiency-list">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    ];
    
}
     
export default Resume;