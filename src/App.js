import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Mission';
import MissionCard from './components/MissionCard';
import Missions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        ,
        <SolarSystem />
        ,
        <Mission />
        ,
        {Missions.map((missao) => (<MissionCard
          key={ missao.name }
          name={ missao.name }
          year={ missao.year }
          country={ missao.country }
          destination={ missao.destination }
        />))}
      </>
    );
  }
}

export default App;
