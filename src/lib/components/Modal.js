import React from 'react';
import cross from './cross.svg';
import '../src/modal.css';

const App = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className={`modal ${props.className}`} onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-body">
                    {props.children}
                    <div className="modal-close">
                        <img src={cross} onClick={props.onClose} className="close" alt="cross" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
