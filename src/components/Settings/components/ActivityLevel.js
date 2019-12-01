import React, { useState } from "react";
import {ListStyle} from "../styles";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem,
  CustomInput,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const ActivityLevel = props => {
  const [modal, setModal] = useState(false);

  // const [activityLevel, setActivityLevel] = useState(props.data.activityLevel);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Activity Level</div>
      {/* <div>{props.data.activityLevel}</div> */}
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Activity Level</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="activityLevel">ActivityLevel</Label>
              <Label for="exampleCustomSelect">Custom Select</Label>
              <CustomInput
                type="select"
                id="activityLevel"
                name="activityLevel"
                // value={activityLevel}
                // onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option value="">Select</option>
                <option value={1.2}>Sedentary</option>
                <option value={1.375}>Light</option>
                <option value={1.55}>Moderate</option>
                <option value={1.725}>Very</option>
                <option value={1.9}>Extra</option>
              </CustomInput>
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

export default ActivityLevel;
