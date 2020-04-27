import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import $ from 'jquery'

const ModalPopup = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.buttonText}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                dialogClassName="common-model-modal"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.titleText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
            </Modal>
        </>
    );
}

export default ModalPopup