import React from 'react'

import classes from './Cockpit.css'

const Cockpit = (props) =>{

    let assignedClasses = [];
    let btnClass = ''

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
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>This is React App</h1>
            <button 
            className={btnClass}
            onClick={() => props.clicked('Maximillian')}>Switch</button>
        </div>
    )
}

export default Cockpit