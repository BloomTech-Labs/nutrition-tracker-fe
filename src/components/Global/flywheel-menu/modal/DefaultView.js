import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DefaultView = props => {
    return(
    <>
    <Modal show={props.isEnabled} onHide={()=>props.handleToggleClickProp()} >
    <Modal.Header closeButton>
      <Modal.Title>Sorry, the link is broken</Modal.Title>
    </Modal.Header>
      <Button variant="secondary" onClick={()=>props.handleToggleClickProp()}>
        Close
      </Button>
  </Modal>
    </>
    )
}

export default DefaultView;