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

const WeightGoals = props => {
  const [modal, setModal] = useState(false);

  const [target_weight, setTargetWeight] = useState( props.data.target_weight);
  const [target_date, setTargetDate] = useState(props.data.target_date);


  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Weight Goals</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Weight Goals</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="target_weight">Target Weight</Label>
              <Input
                type="text"
                name="target_weight"
                id="target_weight"
                value={target_weight}
                onChange={(e) => setTargetWeight(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="target_date">Target Date</Label>
              <Input
                type="text"
                name="target_date"
                id="target_date"
                value={target_date}
                onChange={(e) => setTargetDate(e.target.value)}
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

export default WeightGoals;
