import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { ListStyle } from "../styles";

const Weight = props => {
  const [modal, setModal] = useState(false);

  const [weight, setWeight] = useState("");

  const weight_lbs = useSelector(state => state.updateUserInfo.weight_lbs);

  useEffect(() => {
    setWeight(props.data.weight_lbs);
  }, [props.data.weight_lbs]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Weight</div>
        <div>{weight_lbs}lbs</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>Weight</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="weight">Current Weight</Label>
              <Input
                type="number"
                name="weight"
                id="weight"
                placeholder={weight_lbs || ""}
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
              props.updateWeight(lbsToKgs(weight));
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

// Converts height to centimeters to be returned to the DB.
function lbsToKgs(lbs) {
  const kg = lbs * 0.45359237;
  return { weight_kg: kg };
}

export default Weight;
