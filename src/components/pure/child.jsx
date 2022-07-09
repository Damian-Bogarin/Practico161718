import React, {useRef} from 'react';

const Child = ({name , send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text ${text}`)
    }

    function submitName(e){
        e.preventDefault(); //Evitar que la pagina se recarge por ser un buton subnmit
        update(nameRef.current.value);
    
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => { console.log('OnMoiseOver')}}> Child component, helllo {name} </p>
            <button onClick={() => { console.log('Boton 1 pulsado')}}> boton 1</button>
            <button onClick={pressButton}> boton 2</button>
            <button onClick={() => {pressButtonParams('X')}}> boton 3</button>
            <input ref = {messageRef}  placeholder='insert a text' onFocus={() => {console.log('OnFocus')}} onChange={(e)=>{console.log('input change', e.target.value )}} onCopy={() => {console.log('Copied text from input')}}  ></input>

            <button onClick={() => {send(messageRef.current.value)}}> SEND </button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name'></input>
                    <button type='submit'> Update Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
