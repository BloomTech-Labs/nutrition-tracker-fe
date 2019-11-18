import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RecordWeight from './RecordWeight';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faUtensils,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";

//We need to import actions to do some Axios calls for:
//Calling the api to add some foods
//Call Backend to record a new users weight

//we also need a reducer for our actions which will include starting, fetching, and finishing for foods additions
//recipe additions, and weight recording. 



class PopModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weight:""
        };
    }

handleInputChange = (e) => {
    this.setState({
            weight: e.target.value
    });
}

handleSave = () => {
    //need to handle save for some data. Here we import actions and make use of them
};

handleClose = () => {   
    this.setState({
        weight: ""
    });
};

render(){

    if(this.props.segue === "Food"){
    return (
        <>
        <Modal show={this.props.isEnabled} onHide={()=>this.props.handleToggleClickProp()} >
        <Modal.Header closeButton>
          <Modal.Title>Food Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> {return ( this.handleClose(),this.props.handleToggleClickProp() )}}>
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



else if(this.props.segue === "Recipe"){
    return (
        <>
        <Modal show={this.props.isEnabled} onHide={()=>this.props.handleToggleClickProp()} >
        <Modal.Header closeButton>
          <Modal.Title>Recipe Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.props.handleToggleClickProp()}>
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

else if(this.props.segue === "Weight"){
    return (
        <RecordWeight handleToggleClickProp = {this.props.handleToggleClickProp} weight={this.state.weight} isEnabled = {this.props.isEnabled} handleInputChange = {this.handleInputChange} handleClose={this.handleClose} />
    )
}

    else if(this.props.segue === "" || this.props.segue === null ){
        return (
            <>
            <Modal show={this.props.isEnabled} onHide={()=>this.props.handleToggleClickProp()} >
            <Modal.Header closeButton>
              <Modal.Title>Sorry, you link is broken</Modal.Title>
            </Modal.Header>
              <Button variant="secondary" onClick={()=>this.props.handleToggleClickProp()}>
                Close
              </Button>
          </Modal>
            </>
        )
    }

}}


export default PopModal;