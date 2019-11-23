import React, { useState } from "react";
import {ListStyle} from "../styles";
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
} from "reactstrap";

const Weight = props => {
  const [modal, setModal] = useState(false);

  const [weight, setWeight] = useState(props.data.weight);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Weight</div>
        <div>{props.data.weight}lbs</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Weight</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="weight">Current Weight</Label>
              <Input
                type="text"
                name="weight"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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

export default Weight;
