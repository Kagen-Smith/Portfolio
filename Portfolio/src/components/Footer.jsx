import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="custom-footer text-light py-3">
      <div className="container text-center">
      
        <div className="mb-2">
          <a 
            href="https://www.linkedin.com/in/kagen-smith/" 
            className="text-light me-3" 
            aria-label="LinkedIn"
            style={{ fontSize: '24px' }}
            target='_blank'
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://github.com/Kagen-Smith" 
            className="text-light me-3" 
            aria-label="GitHub"
            style={{ fontSize: '24px' }}
            target='_blank'
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://twitter.com/KagenSmith" 
            className="text-light" 
            aria-label="Twitter"
            style={{ fontSize: '24px' }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        
       
        <p className="mb-0">&copy; {new Date().getFullYear()} Rory Dowse. All rights reserved.</p>
      </div>
    </footer>
  );
}