import { useState } from 'react';
import { validateEmail, validateName, validateMessage } from '../../utils/helper';


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
        <div>
            <h1>Contact Me</h1>
            <form className="form">
                <input
                    value={inputName}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default ContactMe;