import React from 'react';
import AlgorithmGenerator from '../components/AlgorithmGenerator';


const Main = props => {

    const generate = () => {
        const generator = document.querySelector(".generatorArea");
        let timesrun = 0;
        let selectedAlgo;
        let interval = setInterval(() => {
            timesrun += 1;
            let position = Math.floor(Math.random() * 401);
            if (position < 26) {
                selectedAlgo = document.getElementById("algo-1");
            } else if (position > 26) {
                selectedAlgo = document.getElementById("algo-2");
            } else if (position > 76) {
                selectedAlgo = document.getElementById("algo-3");
            } else if (position > 126) {
                selectedAlgo = document.getElementById("algo-4");
            } else if (position > 176) {
                selectedAlgo = document.getElementById("algo-5");
            } else if (position > 226) {
                selectedAlgo = document.getElementById("algo-6");
            } else if (position > 276) {
                selectedAlgo = document.getElementById("algo-7");
            } else if (position > 326) {
                selectedAlgo = document.getElementById("algo-7");
            } 
            // console.log(selectedAlgo);
            generator.scrollTo(0, position);
            if (timesrun === 50) {
                console.log(selectedAlgo);
                clearInterval(interval);
                setTimeout(()=> {
                    selectedAlgo.className = "algoSelection";
                },500);
            }
        }, 80)
    }

    return (
        <div id="generatorContainer">
            <AlgorithmGenerator></AlgorithmGenerator>
            <button onClick={generate} className="btn btn-danger mt-2 col-sm-3 mx-auto lead">Click Me!</button>
        </div>
    )
};


export default Main;