import React, { useState } from 'react'
import NetflixLogo from './NetflixLogo';
import { Link } from 'react-router-dom';
import './SignIn.css'

const INITIAL_STATE = {email: '', password: '', checkbox: ''}
const SignIn = () => {
    const [form, setForm] = useState(INITIAL_STATE);

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
        password: [
            {
              isValid: (value) => !!value,
              message: 'Is required.',
            },
            {
              isValid: (value) => value.length > 8,
              message: 'value must be greater than 8.',
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
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }))
        console.log({id, value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errorFields = getErrorFields(form);
        // console.log(errorFields)
        const hasErrors = Object.values(errorFields).flat().length > 0;
        if (hasErrors) return setErrorUI({ ...errorFields });
        console.log(`${form.email} ${form.password}`);
        setForm(INITIAL_STATE);
    }
  return (
    <div>
        <nav>
            <NetflixLogo />
        </nav>

        <div className='sign-form'>
        <form onSubmit={handleSubmit} >
            <h1>Sign In</h1>
            <div className='form-email'>
                <input type="text" id='email' value={form.email} onChange={handleChange} placeholder='Email address...'/>
                <div className='error'>
                        {errorUI?.email?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.email[0].message}
                            </span>
                        ) : null}
                    </div>
            </div>
            <div className='form-password'>
                <input type="password" id='password' value={form.password} onChange={handleChange} placeholder='Password'/>
                <div className='error'>
                        {errorUI?.password?.length ? (
                            <span style={{ color: 'red' }}>
                            {errorUI.password[0].message}
                            </span>
                        ) : null}
                    </div>
            </div>
            
            <button className='signin-btn' type='submit'><Link to='/web-page'>Sign in</Link></button>

            <div className='form-check'>
                <div>
                    <input type="checkbox" id='checkbox' value={form.checkbox} onChange={handleChange}/>
                    <span>Remember me</span>
                </div>
                <div>
                    <a href="https://www.google.com">Need Help</a>
                </div>
            </div>
        </form>

        <div className='footer'>
            <h3>New to Netflix? <Link to='/'>Sign up now.</Link></h3>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="https://www.google.com">Learn more.</a> </p>
        </div>
        </div>

        

        
    </div>
  )
}

export default SignIn;