import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons'; // Added missing imports
import '/./src/components/styles/footer.css';




export default function Footer() {
    return (
        <footer className='footer'>
            <div>
                <div>
                    <a 
                        href="https://www.linkedin.com/in/kagen-smith/" 
                        className="linkedin-link" 
                        aria-label="LinkedIn"
                        style={{ fontSize: '24px' }}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a 
                        href="https://github.com/Kagen-Smith" 
                        className="github-link" 
                        aria-label="GitHub"
                        style={{ fontSize: '24px' }}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                        href="https://bsky.app/profile/psychocontent.bsky.social" 
                        className="twitter-link" 
                        aria-label="bluesky"
                        style={{ fontSize: '24px' }}
                    >
                        <FontAwesomeIcon icon={faBluesky} />
                    </a>
                </div>
                <p className='copywrite'>&copy; {new Date().getFullYear()} Kagen Smith. All rights reserved.</p>
            </div>
        </footer>
    );
}