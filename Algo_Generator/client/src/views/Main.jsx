import React from 'react';
import AlgorithmGenerator from '../components/AlgorithmGenerator';


const Main = props => {

    return (
        <div id="generatorContainer">
            <AlgorithmGenerator></AlgorithmGenerator>
            <button className="btn btn-danger mt-2 col-sm-3 mx-auto lead">Click Me!</button>
        </div>
    )
};


export default Main;