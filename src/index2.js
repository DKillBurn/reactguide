import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Core extends Component{
    render(){
     return React.createElement("ul", null, React.createElement("li", null,"Data 1"), React.createElement("li", null,"Data 2"));
    }
}

ReactDom.render(<Core />, document.getElementById("root"));