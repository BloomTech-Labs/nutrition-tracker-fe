import React, { useState, useEffect } from "react";
import { ListStyle } from "../styles";
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
  Input
} from "reactstrap";

const WeightGoal = props => {
  const [modal, setModal] = useState(false);

  const [weight_goal_kg, setWeight] = useState("");

  useEffect(() => {
    setWeight(props.data.weight_goal_kg);
  }, [props.data.weight_goal_kg]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Weight Goal</div>
        <div></div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Weight Goal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Target Weight">Target Weight</Label>
              <Input
                type="text"
                name="fat"
                id="fat"
                value={weight_goal_kg || ""}
                onChange={e => setWeight(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser({ weight_goal_kg });
            }}
          >
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

export default WeightGoal;
