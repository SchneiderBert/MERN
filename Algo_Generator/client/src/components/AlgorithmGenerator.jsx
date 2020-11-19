import React from 'react';


const AlgorithmGenerator = props => {
  

    return (
        // Need to figure out how to manipulate the scroll on generatorArea to create slot effect
            <ul className="generatorArea">
                <li className="algoSelection bg-warning">Algorithm 1</li>
                <li className="algoSelection bg-danger">Algorithm 2</li>
                <li className="algoSelection bg-warning">Algorithm 3</li>
                <li className="algoSelection bg-danger">Algorithm 4</li>
                <li className="algoSelection bg-warning">Algorithm 5</li>
                <li className="algoSelection bg-danger">Algorithm 6</li>
                <li className="algoSelection bg-warning">Algorithm 7</li>

            </ul>
    )
}


export default AlgorithmGenerator;