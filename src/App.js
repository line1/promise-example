import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetch from 'node-fetch';

class App extends Component {
  render() {
    const { doSomethingNow, doSomethingEventually, result } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>Current state: {result}</p>
        {}
        <button
          type='button'
          onClick={doSomethingNow}>Do Something Now</button>
        <button
          type='button'
          onClick={doSomethingEventually}>Do Something Eventually</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  doSomethingNow: () => ({
    type: 'SYNC_ACTION',
    payload: 'lorem ipsum'
  }),
  doSomethingEventually: () => ({
    type: 'ASYNC_ACTION',
    payload: {
      data: 'probably correct??',
      promise: new Promise((resolve, reject) => setTimeout(reject, 1000, 'oh no!'))
    }
  })
}, dispatch);

export default connect(
  (state) => ({ result: state.result }),
  mapDispatchToProps
)(App);
