import React from 'react';
import ReactDom from 'react-dom'


const AlgoModal = props => {


    return ReactDom.createPortal(
        <div id="modal">

        </div>, document.getElementById('portal')
    )
}