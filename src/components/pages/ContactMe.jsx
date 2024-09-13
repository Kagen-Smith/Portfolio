import { useState } from 'react';
import { validateEmail, validateName, validateMessage } from '/./src/utils/helper.js';
import '/./src/components/styles/contactMe.css';



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
        <section className='contact-section'>
            <h1>Contact Me</h1>
            <form className='contact-form'>
                name:
                <input
                    
                    value={inputName}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    className='form-control'
                   
                /> email address:
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    className='form-control'
                  
                /> message:
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    className='form-control'
                    
                />
                <button type="button" className='contact-form button' onClick={handleFormSubmit} >Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="form-errors">{errorMessage}</p>
                </div>
            )}
            </section>
    );
}

export default ContactMe;