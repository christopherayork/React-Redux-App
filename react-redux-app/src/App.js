import React from 'react';
import './App.css';
import Launch from './components/Launch';
import { connect } from 'react-redux';
import * as actions from './actions';

function App(props) {
  const { launchData, getLaunchData } = props;

  return (
    <div className="App">
      <Launch launchData={launchData} getLaunchData={getLaunchData} />
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(App);
