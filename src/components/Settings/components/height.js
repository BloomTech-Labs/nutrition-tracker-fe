import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
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

const Height = props => {
  const [modal, setModal] = useState(false);

  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const myFeet = useSelector(state => state.updateUserInfo.height.feet);
  const myInches = useSelector(state => state.updateUserInfo.height.inches);

  useEffect(() => {
    setFeet(myFeet);
  }, [myFeet]);

  useEffect(() => {
    setInches(myInches);
  }, [myInches]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Height</div>
        <div>
          {myFeet}'{myInches}''
        </div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle} size={"lg"}>
        <ModalHeader toggle={toggle}>Height</ModalHeader>
        <ModalBody size="lg">
          <Form size="lg">
            <FormGroup>
              <Label for="feet">Feet</Label>
              <Input
                type="number"
                name="feet"
                id="feet"
                placeholder={myFeet || ""}
                onChange={e => setFeet(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="inches">Inches</Label>
              <Input
                type="number"
                name="inches"
                id="inches"
                placeholder={myInches || ""}
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
