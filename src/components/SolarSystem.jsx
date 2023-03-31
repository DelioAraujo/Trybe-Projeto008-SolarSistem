import React from "react";
import Title from "./Title";
import PlanetCard from "./PlanetCard";
import Planets from "../data/planets";

class SolarSystem extends React.Component{
    render() {
        const planetas = Planets;
        return (
            <div>
            <div data-testid="solar-system">
                <Title headLine={"Planetas"}/>
            </div>
            <div>
                {
                    planetas
                    .map((planeta) => <PlanetCard key={planeta.name} planetName={planeta.name} planetImage={planeta.image}/>)
                }
            </div>
            </div>

        )
    }
}

export default SolarSystem;