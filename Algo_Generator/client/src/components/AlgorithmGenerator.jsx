import React from 'react';


const AlgorithmGenerator = props => {
    const algos = props.algos

    return (
        <ul className="generatorArea">
            {
    
                algos.map((algo, index) => (
                (parseInt(index)  % 2 === 0)  ?  <li className="algoSelection bg-warning" key={index} id={`algo-${index + 1}`} className="algoSelection bg-warning">Algorithm {algo.name}</li> :
                
                <li className="algoSelection bg-danger" key={index} id={`algo-${index + 1}`} > {algo.name}</li>
                
            ))}

            {/* <li id="algo-1" className="algoSelection bg-warning">Algorithm 1</li>
            <li id="algo-2" className="algoSelection bg-danger">Algorithm 2</li>
            <li id="algo-3" className="algoSelection bg-warning">Algorithm 3</li>
            <li id="algo-4" className="algoSelection bg-danger">Algorithm 4</li>
            <li id="algo-5" className="algoSelection bg-warning">Algorithm 5</li>
            <li id="algo-6" className="algoSelection bg-danger">Algorithm 6</li>
            <li id="algo-7" className="algoSelection bg-warning">Algorithm 7</li> */}
        </ul>

    )
}


export default AlgorithmGenerator;