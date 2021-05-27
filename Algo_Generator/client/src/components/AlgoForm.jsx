import React from 'react'
import { Button, FormControl, Input, InputLabel, TextareaAutosize, Typography} from '@material-ui/core';
import { Link } from '@reach/router';


const AlgoForm = props => {
    let newAlgo = props.newAlgo
    let submitHandler = props.submitHandler
    let inputHandler = props.inputHandler


    const formStyle = {
        background: '#ccc',
        padding: '1rem',
        border: 'solid 0.2rem black',
        minHeight: '45vh',
        minWidth: '20vw', 
        display: 'flex',
        flexDirection: 'column',
        
    }
    const inputStyle = {
        padding: '1rem',
        margin: '0 1rem'
    }
    const wrapperStyle = {
        display: 'grid',
        minHeight: '70vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    return (
        <div style={wrapperStyle}>
            <Link to='/'><Typography variant='h4'>Home</Typography> </Link>
            <form style={formStyle} action="" method="post">
                <FormControl style={inputStyle}>
                    <InputLabel  htmlFor='algoName'>Algorithm Name:</InputLabel>
                    <Input onChange={inputHandler} name='name' value={newAlgo.name} id="algoName" />
                </FormControl>
                <FormControl style={inputStyle}>
                    <TextareaAutosize onChange={inputHandler} value={newAlgo.description} name='description' id='algoDescription' aria-label="minimum height" rowsMin={3}  placeholder='Algorithm Description' />
                </FormControl>
                <FormControl style={inputStyle}>
                    <InputLabel htmlFor='algoVideoLink'>Algorithm Video Link:</InputLabel>
                    <Input onChange={inputHandler} name='videoLink' value={newAlgo.videoLink} id="algoVideoLink" />
                </FormControl><br></br>
                   <Button onClick={submitHandler} variant='contained' color='primary'>Submit</Button>

            </form>

        </div>
    )
}

export default AlgoForm
