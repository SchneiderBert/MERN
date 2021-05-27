import React, {useState, useEffect} from 'react';
import AlgorithmGenerator from '../components/AlgorithmGenerator';
import {Link} from '@reach/router'
import axios from 'axios';
import { Typography } from '@material-ui/core';


const Main = props => {
    const [algoList, setAlgoList] = useState([])
    const [selectedAlgo, setSelectedAlgo] = useState()
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
        let interval = setInterval(() => {
            timesrun += 1;
            let position = Math.floor(Math.random() * 401);
            if (position > 326) {
                selectedAlgo = document.getElementById("algo-7");
            } else if (position > 276) {
                selectedAlgo = document.getElementById("algo-7");
            } else if (position > 226) {
                selectedAlgo = document.getElementById("algo-6");
            } else if (position > 176) {
                selectedAlgo = document.getElementById("algo-5");
            } else if (position > 126) {
                selectedAlgo = document.getElementById("algo-4");
            } else if (position > 76) {
                selectedAlgo = document.getElementById("algo-3");
            } else if (position > 26) {
                selectedAlgo = document.getElementById("algo-2");
            } else if (position < 26) {
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
                },500);

            }
        }, 80)
    }

    return (
        <div id="generatorContainer">
            <Link to='/add'><Typography variant='h4'>Add</Typography> </Link>
            <AlgorithmGenerator algos={algoList}></AlgorithmGenerator>
            <button onClick={generate} className="btn btn-danger mt-2 col-sm-3 mx-auto lead">Click Me!</button>
            
        </div>
    )
};


export default Main;