import LoginBtn from './LoginBtn';
import smallChaosWalking from '../images/chaos-walking400.png';
import mediumChaosWalking from '../images/chaos-walking800.png';
import largeChaosWalking from '../images/chaos-walking1200.png';
import xlargeChaosWalking from '../images/chaos-walking1920.png';
import { Redirect } from 'react-router-dom';
import {useState} from 'react';
import useGlobal from '../globals/globalState';

function CreateUser ({ handleValidation, createUser }){
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [redirect, setRedirect] = useState(false);
    
    const [globalState, globalActions] = useGlobal();

    function handleUpdateUser(e){
        e.preventDefault();

        const newUsername = e.target.elements.username.value.trim();
        const newPassword= e.target.elements.password.value.trim();
        
        let isFormValid = true;

        if(newUsername === ''){
            setErrorUsername('Invalid username...');
            isFormValid = false;
        }

        if(newPassword === ''){
            setErrorPassword('Invalid password...');
            isFormValid = false;
        }

        if(isFormValid){
            globalActions.createUser({
                username: newUsername,
                password: newPassword
            });

            if(createUser){
                handleValidation();
                return;
            }

            console.log('user created...');
            
            e.target.elements.username.value = '';
            e.target.elements.password.value = '';

           setRedirect(true);

        }
    }

    function handleInputChange(e){
        const inputText = e.target.value.trim();
        if(inputText !==''){
            if(e.target.name === 'username'){
                setErrorUsername(false);
            }else{
                setErrorPassword(false);
            }
            
        }
    }


    return (
    <div className="user-storage">
        {redirect !== false && <Redirect to='/' /> }
        {globalState.user && 
            <div className="current-user-info">
                
            </div>
        }
        
        <div> 
            <img className = 'hero-image' alt='Chaos Walking Movie' src={smallChaosWalking} srcSet={`${smallChaosWalking} 400w, ${mediumChaosWalking} 800w, ${largeChaosWalking} 1200w, ${xlargeChaosWalking} 1920w`} />
        
            <div className= "form-signup">
                {globalState.user && <h1>Sign Up</h1>}
            <form onSubmit= {handleUpdateUser} className= "form-update-or-create-user">

                <div className= "group-signup">
                    <label htmlFor="username"></label>
                    <input type= "text" id="username" name="username" placeholder="Username" onChange={handleInputChange}></input>
                    {errorUsername !== false && <span className="error">&#42; {errorUsername}</span>}
                <br></br>

                    <label for="password"></label>
                    <input type="text" id="password" name="password" placeholder="Password"  onChange={handleInputChange}/>
                    {errorPassword !== false && <span className="error">&#42; {errorPassword}</span>}
                </div>

                <div className = "submit-signup">
                    <input type = "submit" value={createUser ? 'Create User' : 'Submit' }/>
                    
                    
                </div>

            </form> 
            </div>   
        </div>
    </div>

       
    );
}

CreateUser.defaultProps  = {
    createUser:false
}

export default CreateUser;
