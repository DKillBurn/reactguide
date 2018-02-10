import React, { PureComponent } from 'react'
import Person from '../Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
/* Stateless */
/*const Persons = (props) =>
    props.persons.map((person, index)=>{
        return <ErrorBoundary key={person.id}><Person 
          click={() => props.clicked(index)}
          name={person.name} 
          age={person.age}
          key={person.id} 
          changed={(event) => props.changed(event, person.id)}/></ErrorBoundary>
      })
*/
/* Statefull */
class Persons extends PureComponent{

    constructor(props)
    {
      super(props)
      console.log('[Persons.js] Inside Constructor')
    }
  
    componentWillMount()
    {
      console.log('[Persons.js] Inside componentWillMount')
    }
    componentDidMount()
    {
      console.log('[Persons.js] Inside componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps')
    }

    /*shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }*/

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render(){
        console.log('[Persons.js] Inside Render')
        return(
            this.props.persons.map((person, index)=>{
                return <ErrorBoundary key={person.id}><Person 
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id} 
                changed={(event) => this.props.changed(event, person.id)}/></ErrorBoundary>
            })
        )
    }
}

export default Persons