import React from "react";
import Missions from '../data/missions';

class MissionCard extends React.Component {
    render() {
        const { name, year, country, destination } = this.props;
        const missoes = Missions
        return(
            <div data-testid="mission-card">
                {
                missoes.map((missao) =>
                    <p data-testid="mission-name">{missao.name}</p>
                    <p data-testid="mission-year">{missao.year}</p>
                    <p data-testid="mission-country">{missao.country}</p>
                    <p data-testid="mission-destination">{missao.destination}</p>
                    )
                }
            </div>
        )
    }
}

export default MissionCard;
