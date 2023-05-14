import React from 'react'
import NetflixLogo from './NetflixLogo';

const Home = () => {
  return (
    <div className='home'>
        <nav className='nav-bar'>
            <NetflixLogo />
            <button className='nav-btn'>Sign In</button>
        </nav>

        <div className='home-container'>
            <div className='home-text'>
                <h2>
                    Unlimited movies, TV
                    <span>shows, and more</span>
                </h2>
                <h3>Watch anywhere. Cancel anytime.</h3>
                
            </div>

            <form>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <input type="Put in your Email Address..." />
                <button>Get Started</button>
            </form>
        </div>
        
    </div>
  )
}

export default Home;