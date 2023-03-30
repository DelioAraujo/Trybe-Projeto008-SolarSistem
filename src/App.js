import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Mission';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <Header />,
      <SolarSystem />,
      <Mission />,
      <MissionCard />
    );
  }
}

export default App;
