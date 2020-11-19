import React from 'react';
import AlgorithmGenerator from '../components/AlgorithmGenerator';


const Main = props => {

    const generate = () => {
        const generator = document.querySelector(".generatorArea");
        
            setInterval(() => {
               let position = Math.floor(Math.random() * 401);
               generator.scrollTo(0, position);

            }, 80)
    }

    return (
        <div id="generatorContainer">
            <AlgorithmGenerator></AlgorithmGenerator>
            <button onClick = {generate} className="btn btn-danger mt-2 col-sm-3 mx-auto lead">Click Me!</button>
        </div>
    )
};


export default Main;