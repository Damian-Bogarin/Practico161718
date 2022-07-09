import React, { Component } from 'react'

export default class lifeCycleExample extends Component {

    constructor(props){
super(props)
console.log('Constructor: cunado se inicia el componente')
    }

    componentWillMount(){
        console.log('WillMount: Antes de que se monte!')
    }
    componentDidMount(){
        console.log('DidMount: Antes de renderizarlo!')
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReciveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe actualizarse
         */
    }

    componentWillUpdate(){
        console.log('WillUpdate: Antes de actualizarse')
    }

    componentDidUpdate(){
        console.log('DidUpdate: despues de actualizarse')
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer')
    }

  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
