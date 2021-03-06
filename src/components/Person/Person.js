import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Aux'
import withClass from '../../hoc/withClass'

/*const person = (props) =>{
    
    const rnd = Math.random();
    /*if(rnd > 0.7)
    {
        throw new Error('Something went wrong')
    }
    
    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name}!, and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}  value={props.name} />
        </div>    
    )
}*/

class Person extends Component{
    
    constructor(props)
    {
      super(props)
      console.log('[Person.js] Inside Constructor')
    }
  
    componentWillMount()
    {
      console.log('[Person.js] Inside componentWillMount')
    }
    componentDidMount()
    {
      console.log('[Person.js] Inside componentDidMount')
    }

    render(){
        console.log('[Person.js] Inside Render')
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name}!, and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}  value={this.props.name} />
            </Aux>    
        )
    }
}

export default withClass(Person, classes.Person);