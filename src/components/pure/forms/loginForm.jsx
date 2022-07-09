/**
 * Componente que va acontener un formulario para autenticacion de usuarios
 * 
 */

import React, {useState} from 'react';

const LoginForm = () => {

    const initialCredential = {
        user: '',
        password: ''
    }

    const [credential, setCredential] = useState(initialCredential);


    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
