import React from 'react';


const AlgorithmGenerator = props => {
  

    return (
        // Need to figure out how to manipulate the scroll on generatorArea to create slot effect
            <ul className="generatorArea">
                <li id="algo-1" className="algoSelection bg-warning">Algorithm 1</li>
                <li id="algo-2" className="algoSelection bg-danger">Algorithm 2</li>
                <li id="algo-3" className="algoSelection bg-warning">Algorithm 3</li>
                <li id="algo-4" className="algoSelection bg-danger">Algorithm 4</li>
                <li id="algo-5" className="algoSelection bg-warning">Algorithm 5</li>
                <li id="algo-6" className="algoSelection bg-danger">Algorithm 6</li>
                <li id="algo-7" className="algoSelection bg-warning">Algorithm 7</li>

            </ul>
    )
}


export default AlgorithmGenerator;