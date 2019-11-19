import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DefaultView = props => {
    return(
    <>
    <Modal show={props.isEnabled} onHide={()=>props.handleToggleClickProp()} >
    <Modal.Header closeButton>
      <Modal.Title>Sorry, you link is broken</Modal.Title>
    </Modal.Header>
      <Button variant="secondary" onClick={()=>props.handleToggleClickProp()}>
        Close
      </Button>
  </Modal>
    </>
    )
}

export default DefaultView;