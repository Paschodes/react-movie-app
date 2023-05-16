import React, { useState } from 'react'
import NetflixLogo from './NetflixLogo';
import './Home.css'
import { Link, NavLink } from 'react-router-dom';


const INITIAL_STATE = {email: ''}

const Home = () => {
    const [input, setInput] = useState(INITIAL_STATE);

    const [errorUI, setErrorUI] = useState(null);

    const VALIDATION = {
        email: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
              isValid: (value) => /\S+@\S+\.\S+/.test(value),
              message: 'Needs to be an email.',
            },
        ],
    };
    
    const getErrorFields = (form) =>
        Object.keys(form).reduce((acc, key) => {
          if (!VALIDATION[key]) return acc;
      
          const errorsPerField = VALIDATION[key]
            // get a list of potential errors for each field
            // by running through all the checks
            .map((validation) => ({
              isValid: validation.isValid(form[key]),
              message: validation.message,
            }))
            // only keep the errors
            .filter((errorPerField) => !errorPerField.isValid);
      
          return { ...acc, [key]: errorsPerField };
        }, {});
      

    function handleChange(event) {
        const {id, value} = event.target;
        if (errorUI) setErrorUI(null);
        setInput(prevState => ({
            ...prevState,
            [id]: value
        }))
        console.log({id, value})
    }

   

    function handleSubmit(event) {
        event.preventDefault();
        const errorFields = getErrorFields(input);
        // console.log(errorFields);
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return setErrorUI({ ...errorFields });
        console.log(`${input.email}`);
        setInput(INITIAL_STATE);
        
    }
  return (
    <div className='home'>
        <nav className='nav-bar'>
            <NetflixLogo />
            <button className='nav-btn'><NavLink to='/sign-in '>Sign In</NavLink> </button>
        </nav>

        <div className='home-container'>
            <div className='home-text'>
                <h2><span>Unlimited movies, TV</span> <span>shows, and more</span>
                </h2>
                <h3>Watch anywhere. Cancel anytime.</h3>
                
            </div>

            <form className='form' onSubmit={handleSubmit}>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='in-but'>
                    <input type="text" id='email' value={input.email} onChange={handleChange} placeholder='Email address...'/>
                    
                    <button type='submit'><Link to='/sign-in'>Get Started</Link></button>
                    <div className='error'>
                        {errorUI?.email?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.email[0].message}
                            </span>
                        ) : null}
                    </div>
                </div>
                
            </form>
        </div>
        
    </div>
  )
}

export default Home;