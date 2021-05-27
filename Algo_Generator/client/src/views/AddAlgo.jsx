import React, { useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import AlgoForm from '../components/AlgoForm'

const AddAlgo = () => {
    const [newAlgo, setNewAlgo] = useState({
        name: '',
        description: '',
        videoLink: ''
    })

    const inputHandler = e => {
        setNewAlgo({
            ...newAlgo,
            [e.target.name]: e.target.value
        })

    }
    const submitHandler = e => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/create/algorithm`, newAlgo)
        .then(res => {
            if(res.data.results) {
                console.log(res.data.results)
                navigate(`/`)
            } else {
                console.log(res.data)
                
            }
        })
        console.log(newAlgo)
        navigate('/')
    }
    
    return (
        <div>
            <h1>Add an Algo</h1>
            <AlgoForm newAlgo={newAlgo} inputHandler= {inputHandler} submitHandler={submitHandler}></AlgoForm>
        </div>
    )
}

export default AddAlgo
