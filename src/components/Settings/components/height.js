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

const Height = props => {
  const [modal, setModal] = useState(false);

  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  useEffect(() => {
    setFeet(props.data.height.feet);
  }, [props.data.height.feet]);

  useEffect(() => {
    setInches(props.data.height.inches);
  }, [props.data.height.inches]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Height</div>
        <div>
          {feet}'{inches}''
        </div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Height</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="feet">Feet</Label>
              <Input
                type="text"
                name="feet"
                id="feet"
                value={feet}
                onChange={e => setFeet(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="inches">Inches</Label>
              <Input
                type="text"
                name="inches"
                id="inches"
                value={inches}
                onChange={e => setInches(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser(heightToMetric(feet, inches));
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

// Converts height to centimeters to be sent to the DB.
function heightToMetric(feet, inches) {
  const feetInches = feet * 12;
  const totalInches = feetInches + Number(inches);
  const cm = Math.round(totalInches * 2.54);
  return { height_cm: cm };
}

export default Height;
