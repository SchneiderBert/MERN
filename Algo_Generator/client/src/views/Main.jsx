import React, {useState, useEffect} from 'react';
import AlgorithmGenerator from '../components/AlgorithmGenerator';
import {Link} from '@reach/router'
import axios from 'axios';
import { Typography } from '@material-ui/core';
import AlgoModal from '../components/AlgoModal';


const Main = props => {
    const [algoList, setAlgoList] = useState([])
    const [generarorselectedAlgo, setGeneratorSelectedAlgo] = useState()
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=> {
        axios.get('http://localhost:8000/api/algorithms')
        .then(res => {
            console.log(res.data)
            setAlgoList(res.data.results)
            console.log(res.data, 'This will be the Algorithms from the backend');
        })
        .catch(err => console.log(err));
        console.log(algoList)
    },[])

    const generate = () => {
        
        const generator = document.querySelector(".generatorArea");
        let timesrun = 0;
        let selectedAlgo;
        let logicAlgo;
        let interval = setInterval(() => {
            timesrun += 1;
            let position = Math.floor(Math.random() * 401);
            if (position > 326) {
                logicAlgo = algoList[7-1];
                selectedAlgo = document.getElementById("algo-7");
            } else if (position > 276) {
                logicAlgo = algoList[7-1];
                selectedAlgo = document.getElementById("algo-7");
            } else if (position > 226) {
                logicAlgo = algoList[6-1];
                selectedAlgo = document.getElementById("algo-6");
            } else if (position > 176) {
                logicAlgo = algoList[5-1];
                selectedAlgo = document.getElementById("algo-5");
            } else if (position > 126) {
                logicAlgo = algoList[4-1];
                selectedAlgo = document.getElementById("algo-4");
            } else if (position > 76) {
                logicAlgo = algoList[3-1];
                selectedAlgo = document.getElementById("algo-3");
            } else if (position > 26) {
                logicAlgo = algoList[2-1];
                selectedAlgo = document.getElementById("algo-2");
            } else if (position < 26) {
                logicAlgo = algoList[1-1];
                selectedAlgo = document.getElementById("algo-1");
            }
            // console.log(selectedAlgo);
            generator.scrollTo(0, position);
            if (timesrun === 50) {
                console.log(selectedAlgo);
                clearInterval(interval);
                generator.scrollTo(0, position);
                setTimeout(() => {

                    selectedAlgo.className = "algoSelection";
                },500)

            }
        }, 80)

        setTimeout(()=> setIsOpen(true), 6000)
  
    }
    

    return (
        <div id="generatorContainer">
            {/* <Link to='/add'><Typography variant='h4'>Add</Typography> </Link> */}
            <AlgorithmGenerator algos={algoList}></AlgorithmGenerator>
            <button onClick={generate} className="btn btn-danger mt-2 col-sm-3 mx-auto lead">Click Me!</button>
            <AlgoModal open={isOpen} Algo={generarorselectedAlgo} />
        </div>
    )
};


export default Main;