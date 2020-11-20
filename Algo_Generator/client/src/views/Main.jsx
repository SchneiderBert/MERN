import React from 'react';
import AlgorithmGenerator from '../components/AlgorithmGenerator';


const Main = props => {

    const generate = () => {
        const generator = document.querySelector(".generatorArea");
        let timesrun = 0;
        let interval = setInterval(() => {
            timesrun += 1;
            let position = Math.floor(Math.random() * 401);

            switch (position) {
                case position < 26:
                    position = 0;
                    break;
                case position > 26:
                    position = 57;
                    break;
                case position > 76:
                    position = 114;
                    break;
                case position > 76:
                    position = 171;
                    break;
                case position > 126:
                    position = 228;
                    break;
                case position > 176:
                    position = 285;
                    break;
                case position > 226:
                    position = 342;
                    break;
                case position > 276:
                    position = 400;
                    break;
                default:
                    break;
            }
            generator.scrollTo(0, position);
            if (timesrun === 50) {
                clearInterval(interval);
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