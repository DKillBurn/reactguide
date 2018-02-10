import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Person from '../components/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

class App extends PureComponent {

  constructor(props)
  {
    super(props)
    console.log('[App.js] Inside Constructor')
  }

  componentWillMount()
  {
    console.log('[App.js] Inside componentWillMount')
  }
  componentDidMount()
  {
    console.log('[App.js] Inside componentDidMount')
  }

  /*shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
}*/

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons:[
      {id: '1a', name: 'Max', age: '19'},
      {id: '2b', name: 'Mau', age: '25'},
      {id: '3c', name: 'Paola', age: '23'}
    ]
  }

  switchHandler = (newName)=>{
    //console.log('It was Clicked!');
    //NO HACER ESTO => this.state.persons[0].name ="JOSE";
    this.setState({persons: [
      {name: newName, age: '19'},
      {name: 'Mau', age: '25'},
      {name: 'Paola', age: '23'}
    ],
    showPersons: false
    });
  }

  nameChangeHandler = (event, id)=>{
    //console.log('It was Clicked!');
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })

  const person = {
    ...this.state.persons[personIndex]
  }

//const person = Object.assign({}, this.state.persons[personIndex])

  person.name = event.target.value

  const persons = [...this.state.persons]

  persons[personIndex] = person

    this.setState({persons: persons});
  }

  deletePersonHandler = (index)=>{
    //const persons = this.state.persons.skice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler= (event) => 
  {
    const doesShow = this.state.showPersons;
    this.setState({
    showPersons: !doesShow
  });
  }

  render() {
    console.log('[App.js] Inside Render')

    const style = {
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />
        </div>
      );      
    }


    return (      
        <Aux classes={classes.App}>
        <Cockpit showPersons = {this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
          {persons}  
        </Aux>      
    );
    //return React.createElement('div', null, 'h1', 'hi, i\'m a React App');
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, '¿Does it works?'));
  }
}

export default withClass(App, classes.App);