import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Contact  from './Contact';
import ContactInfo  from './ContactInfo';
import { hot } from 'react-hot-loader';

  class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        name: ''
      };
    }

     render(){

         return (
             <div>
                <Contact/>
                <button onClick={()=> {this.setState({name: 'Velopert'});}}>Click</button>
                <h1>Hello!!!!!{this.state.name}</h1>
             </div>
         );
     }
 }

export default hot(module)(App);
