import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const getStyle = type => {
    switch (type) {
        case 'error':
        case 'unrecoverable':
            return 'background-color: #e2b1b1;';
        case 'warning':
            return 'background-color: #f7e7af';
        default:
            return 'background-color: #d9edf7';
    }
};

export default ({ literals, title, message, actions, closeModal, type, show, ...props }) => {
    return (
        <Modal show={show} {...props} backdrop="static">
            <Modal.Header className={getStyle(type)}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                {actions && actions.map(({ text, onClick }) => (
                    <Button
                        key={text}
                        bsStyle={onClick ? 'primary' : 'default'}
                        onClick={() => closeModal() && onClick && onClick()}
                    >
                        {literals[text] || text}
                    </Button>
                ))}
            </Modal.Footer>
        </Modal>
    );
};
