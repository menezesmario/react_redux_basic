import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
    render(){
      const {
        clickButton,
        newValue
      } = this.props;

      const { inputValue } = this.state;
        return (
          <div className="App" style={{ padding: '10px', backgroundColor: 'brown', color: '#ffffff' }}>
            <h2 style={{ marginBottom: '100px' }}>Redux Basic Class: React with Redux</h2>
            <input type='text' onChange={this.inputChange} value={inputValue} style={{height: '34px', width: '300px'}}/>
            <button onClick={() => clickButton(inputValue)} style={{height: '40px', padding: '0px 30px 0px 30px' }}>
              Send
            </button>
            <h3 style={{ marginBottom: '100px', color: '#ffffff' }}>{newValue}</h3>
          </div>
        );
    }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue 
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
