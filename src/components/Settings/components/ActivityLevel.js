import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  CustomInput,
  Form,
  FormGroup,
  Label,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { ListStyle } from "../styles";

const ActivityLevel = props => {
  const [modal, setModal] = useState(false);

  const [activityLevel, setActivityLevel] = useState("");

  useEffect(() => {
    setActivityLevel(props.data.activity_level);
  }, [props.data.activity_level]);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Activity Level</div>
        <div>{activityLevel}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Activity Level</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="activityLevel">ActivityLevel</Label>
              <Label for="exampleCustomSelect">Custom Select</Label>
              <CustomInput
                type="select"
                id="activityLevel"
                name="activityLevel"
                onChange={e => setActivityLevel(e.target.value)}
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
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateActivityLevel({
                activity_level: parseFloat(activityLevel)
              });
            }}
          >
            Update
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              toggle();
              setActivityLevel(props.data.activity_level);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

//Returns the label for activity level to be displayed for user. Set to ranges because DB can round some numbers up.
const viewActivityLevel = type => {
  switch (true) {
    case type >= 1.2 && type < 1.375: {
      return "Sedentary";
    }
    case type >= 1.375 && type < 1.55: {
      return "Light";
    }
    case type >= 1.55 && type < 1.72: {
      return "Moderate";
    }
    case type >= 1.72 && type < 1.9: {
      return "Very";
    }
    case type >= 1.9: {
      return "Extra";
    }
    default:
      return "";
  }
};

export default ActivityLevel;
