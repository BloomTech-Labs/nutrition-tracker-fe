import React, { useState } from "react";
import ListStyle from "../styles";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const Dob = props => {
  const [modal, setModal] = useState(false);

  const [dob, setDob] = useState(props.data);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Date Of Birth</div>
        <div>{dob}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Date Of Birth</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="dob">Date Of Birth</Label>
              <Input
                type="text"
                name="dob"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </FormGroup>
          </Form>
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

export default Dob;
