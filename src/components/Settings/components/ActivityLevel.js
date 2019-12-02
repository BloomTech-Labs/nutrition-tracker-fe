import React, { useState, useEffect } from "react";
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

  const [activityLevel, setActivityLevel] = useState("");
  console.log(viewActivityLevel(activityLevel))
  console.log(activityLevel)
  useEffect(()=> {
    setActivityLevel(props.data.activity_level);
  }, [props.data.activity_level])
  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Activity Level</div>
      `<div>{viewActivityLevel(activityLevel)}</div>
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
                props.updateActivityLevel({activity_level: parseFloat(activityLevel)});
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

//Returns the users view for activity level. Set to ranges because DB can round some numbers up. 
const viewActivityLevel = (type) => 
{
    switch (true) {
      case type >= 1.2 && type < 1.375: {
        return "Sedentary"
      }
      case (type >= 1.375 && type < 1.55): {
        return "Light"
      }
      case (type >= 1.55 && type < 1.72): {
        return "Moderate"
      }
      case (type >= 1.72 && type < 1.9): {
        return "Very"
      }
      case (type >= 1.9): {
        return "Extra"
      }
      default:
        return "testing";
  }
}



export default ActivityLevel;
