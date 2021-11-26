import React, { useState, setState } from 'react';
import '../styles/contact.css';


function Contact () {

    const [errorMessage, setErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const emailReg = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

    const validateEmail = (event) => {
        const email = event.target.value;

        if (emailReg.test(email)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    function handleFormChange (e) {
        if (e.target.name === 'email') {
            validateEmail(e);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage('');
            }
        }
        else if (e.target.name === 'name') {
            if (e.target.value === '') {
                setErrorMessage('All fields must be filled in.');
            } else {
                setErrorMessage('');
            }
        }
        else if (e.target.name === 'message') {
            if (e.target.value === '') {
                setErrorMessage('All fields must be filled in.');
            } else {
                setErrorMessage('');
            }
        }
    };


    return (
        <div className='contactPage'>
            <h2>Contact</h2>

        <div className='formContainer'>
            <form className='contactForm'>
    
                <label htmlFor='name' className='nameForm'>Name: </label>
                <input type='text' name='name' onChange={handleFormChange} className='nameForm'></input>

                <label htmlFor='email' className='emailForm'>Email: </label>
                <input type='text' name='email' onChange={handleFormChange} className='emailForm'></input>

                <label htmlFor='message' className='messageForm'>Message: </label>
                <textarea name='message' onChange={handleFormChange} className='messageFormText' rows={5}></textarea>    

            <p className='errorText'>{errorMessage}</p>
            <button type='submit'>Submit</button>
            </form>

        </div>
            

        </div>
        
    )
};

export default Contact;