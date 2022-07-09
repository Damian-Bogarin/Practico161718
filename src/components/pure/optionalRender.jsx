import React, {useState} from 'react';
import PropTypes from 'prop-types';



const OptionalRender = () => {

 const [access, setAccess] = useState(true);
const [nMessage, setNMessage] = useState(0);
    // Login / Logout Buttons

    const LoginButton = ({loginAction}) => {
        return (
            optionalButton = <button onClick={loginAction}> Log In </button>
        )
    }

    const LognOutButton = ({logOutAction}) => {
        return (
            optionalButton = <button onClick={logOutAction}> Log Out </button>
        )
    }

    const loginAction = () =>{
        setAccess(true)
    }

    const logOutAction = () =>{
        setAccess(false)
    }


   

    const updateAccess = () => {
        setAccess(!access)
    }

    let optionalButton;

    if(access){
        optionalButton = <LognOutButton logOutAction={logOutAction}></LognOutButton>
    }else{
        optionalButton = <LoginButton loginAction={loginAction} ></LoginButton>
    }

    //unreadMessages 

    let addMessages = () =>{
        setNMessage(nMessage + 1)
    }

    
    return (
        <div>
        {/* Optional button */}
            {optionalButton}

            {/* Nmessage unread */}
            {nMessage > 0 && nMessage === 1 && <p> You have one message un read </p> }
            {nMessage > 1 && <p> You have {nMessage} un read </p> }
            {nMessage === 0 &&<p> There are  no message </p> }
            {nMessage > 0}
            <button onClick={addMessages}> Add Message</button>
        </div>
    );
};


OptionalRender.propTypes = {

};


export default OptionalRender;
