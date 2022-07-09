import React from 'react';
import PropTypes from 'prop-types';
import {useLocation , useNavigate  } from 'react-router-dom'

const HomePage = () => {
    const location = useLocation()

    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Home! sweet home!</h1>
            <button onClick={() => { navigate('/')}}>
                    Go to home
                </button>
                <button onClick={() => { navigate(-1)}}>
                    Go Back
                </button>

                <button onClick={() => {navigate(+1)}}>
                    Go Fordward
                </button>

                <button onClick={()=>{navigate('/profile')}}>
                    Go to Profile
                </button>
        </div>
    );
};


HomePage.propTypes = {

};


export default HomePage;
