import LoginBtn from './LoginBtn';
import smallChaosWalking from '../images/chaos-walking400.png';
import mediumChaosWalking from '../images/chaos-walking800.png';
import largeChaosWalking from '../images/chaos-walking1200.png';
import xlargeChaosWalking from '../images/chaos-walking1920.png';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';


function Login() {
    return (
        <div> 
            <img className = 'hero-image' alt='Chaos Walking Movie' src={smallChaosWalking} srcSet={`${smallChaosWalking} 400w, ${mediumChaosWalking} 800w, ${largeChaosWalking} 1200w, ${xlargeChaosWalking} 1920w`} />
        
        <div className= "account-container">
            <div className= "form-login">
                <h1>Sign In</h1>
            </div>

            <div className= "group-name">
                <label for="username"></label>
                <input type= "text" id="username" name="username" placeholder="Username"></input>
            <br>
            </br>

                <label for="password"></label>
                <input type="text" id="password" name="password" placeholder="Password"></input>
            </div>

            
            <nav className="sign-up-account">
                <p>Don't have an account?</p>
                    <ul>
                     <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                    </ul>
                </nav>
        </div>

        </div>
       
    )
}

export default Login
