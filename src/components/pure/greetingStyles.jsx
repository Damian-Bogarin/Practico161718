import React, {useState} from 'react';

const loggedStyle = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight : 'bold'
}

const GreetingStyles = (props) => {

    //Generamos un estado para saber si el user esta o no logeado
    
    
    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            <h1>
                Hola, {props.name}
            </h1>
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'loge out' : 'logearse'}
            </button>
        </div>
    );
}

export default GreetingStyles;
