import React from 'react';
import PropTypes from 'prop-types';
import cross from './cross.svg';
import './modal.css';

const Modal = (props) => {
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

Modal.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};
Modal.defaultProps = {
    show: false,
};

export default Modal;
