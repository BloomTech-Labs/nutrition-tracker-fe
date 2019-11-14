import React, { useState } from "react";
import ListStyle from "../styles";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem
} from "reactstrap";

const ModalComp = props => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


    return (
      <div>
        {console.log(props.data)}
          <ListGroupItem onClick={toggle}  style={ListStyle}>
            <div>Height</div>
            <div>{props.data}</div>
          </ListGroupItem>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Gender</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
            Update
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
};


export default ModalComp;
