import React, { useState } from 'react';
import { validateEmail, validateName, validateMessage } from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/utils/helper.js';
import '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/styles/contactMe.css';


const styles = {
    contactMe: {
        backgroundColor: 'darkblue',
        color: 'white',
        display: 'flexgrow',
        
        
        bottom: 0,
        width: '100%',
    },
    container: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
    },
    form: {
        backgroundColor: 'gray',
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    input: {
        backgroundColor: 'gray',
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    button: {
        backgroundColor: 'gray',
        color: 'white',
        padding: '20px 0',
        
    },
    errorText: {
        backgroundColor: 'gray',
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
    }
};
function ContactMe() {
    const [email, setEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setInputName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email.');
            return;
        }
        if (!validateName(inputName)) {
            setErrorMessage('Please enter a valid name.');
            return;
        }
        if (!validateMessage(message)) {
            setErrorMessage('Please enter a valid message.');
            return;
        }

        setEmail('');
        setInputName('');
        setMessage('');
        setErrorMessage('Message sent!');
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form style={styles.container}>
                name:
                <input
                    
                    value={inputName}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                   
                /> email address:
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                  
                /> message:
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    
                />
                <button type="button" onClick={handleFormSubmit}style={styles.button} >Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            </section>
    );
}

export default ContactMe;