import React from 'react';
import ReactDom from 'react-dom'


const AlgoModal = props => {

    if (!props.open) return null;

    return ReactDom.createPortal(
        <div id="modal-container">

            <div id="modal">
                <div id="modal-content">
                    <div className="algo-info">
                        <h3 className="algo-name">
                            kjlkhkj
                    </h3>
                        <p className="algo-description">
                            Given array and an index into array, remove and
                            return the array value at that index. Do this
                            without using built-in array methods except
                            pop(). Think of popFront(arr) as equivalent
                            to removeAt(arr,0).
                    </p>
                    </div>
                    <div id="algo-videos">
                        <div className="problem-container vid-container">
                            <h4 className="problem-header">Problem:</h4>
                            <img src="" alt="" className="problem-video video" />

                        </div>

                        <div className="answer-container vid-container">
                            <h4 className="answer-header">Answer:</h4>
                            <img src="" alt="" className="answer-video video" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

        , document.getElementById('portal')
    )
}

export default AlgoModal;