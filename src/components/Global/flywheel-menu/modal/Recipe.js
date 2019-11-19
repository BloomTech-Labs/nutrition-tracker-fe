import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Recipe =  props => {
    return (
        <>
        <Modal show={props.isEnabled} onHide={()=>props.handleToggleClickProp()} >
        <Modal.Header closeButton>
          <Modal.Title>Add A Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will be implemented in RC2</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.handleToggleClickProp()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Recipe;