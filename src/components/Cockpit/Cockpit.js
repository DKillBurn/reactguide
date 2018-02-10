import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

const Cockpit = (props) =>{

    let assignedClasses = [];
    let btnClass = [classes.Button, classes.Red].join(' ')

    if(props.showPersons){
        btnClass = classes.Red;   
    }

    if(props.persons.length <= 2)
    {
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <=1)
    {
      assignedClasses.push(classes.bold)
    }

    return(
        <Aux>
            <h1 className={assignedClasses.join(' ')}>This is React App</h1>
            <button 
            className={btnClass}
            onClick={() => props.clicked('Maximillian')}>Switch</button>
        </Aux>
    )
}

export default Cockpit