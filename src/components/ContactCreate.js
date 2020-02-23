import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ContactCreate extends Component {
  constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick() {
      const contact = {
        name : this.state.name,
        phone: this.state.phone
      }
      this.props.onCreate(contact);
      this.setState({
        name: '',
        phone: ''
      });
      this.nameInput2.focus();
    }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  handleKeyPress(e) {
    if(e.charCode===13){
      this.handleClick();
    }
  }

  render(){
    return(
      <div>
        <h1>Create Contact</h1>
        <p>
          <input type="text"
                 name="name"
                 placeholder="name"
                 value={this.state.name}
                 onChange={this.handleChange}
                 ref={(ref) => { this.nameInput2 = ref}}
                 />

          <input type="text"
                 name="phone"
                 placeholder="phone"
                 value={this.state.phone}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                 />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    )
  }
}

ContactCreate.propTypes = {
    onCreate: PropTypes.func
};



export default ContactCreate;
