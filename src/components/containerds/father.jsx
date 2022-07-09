import React,{useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Dami');

    function showMessage(text){
        alert(`asdasda ${text}`)
    }

    function updateName(newName){
            setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
        {/* props send ejecuta el showmessage */}
            <Child name={name} send={showMessage} update={updateName}> </Child> 
        </div>
    );
}

export default Father;
