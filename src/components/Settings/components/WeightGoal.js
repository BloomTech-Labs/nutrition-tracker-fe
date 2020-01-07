import React, { useEffect, useState } from "react";
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
import { SlideBar } from "../../Global/styled";
import { ListStyle } from "../styles";

const WeightGoal = props => {
  const [modal, setModal] = useState(false);

  const [goal_weight_lbs, setWeight] = useState("");
  const [target_rate, setRate] = useState("");
  const [weight_kg, setWeightKg] = useState("");

  useEffect(() => {
    setWeight(props.data.goal_weight_lbs);
  }, [props.data.goal_weight_lbs]);

  useEffect(() => {
    setRate(props.data.goal_weekly_weight_change_rate);
  }, [props.data.goal_weekly_weight_change_rate]);

  useEffect(() => {
    setWeightKg(props.data.actual_weight_kg);
  }, [props.data.actual_weight_kg]);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Weight Goal</div>
        <div></div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Weight Goal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Target Weight">Target Weight</Label>
              <Input
                type="text"
                name="weight"
                id="weight"
                value={goal_weight_lbs || ""}
                onChange={e => setWeight(e.target.value)}
              />
            </FormGroup>
          </Form>
          <SlideBar style={{display: lbsToKgs(goal_weight_lbs) === weight_kg ? "none" : "block" }}>
            <Input
              name="target_rate"
              type="range"
              value={lbsToKgs(goal_weight_lbs) === weight_kg ? 0 : target_rate}
              min={lbsToKgs(goal_weight_lbs) >= weight_kg ? 0 : -2}
              max={lbsToKgs(goal_weight_lbs) <= weight_kg ? 0 :  2}
              step={0.5}
              onChange={e => setRate(e.target.value)}
            />
            <div>
              {target_rate === 0
                ? <h3>Maintain</h3>
                : target_rate > 0
                ? <h3>{`Gain ${target_rate} pounds per week`}</h3>
                : target_rate < 0
                ? <h3>{`Loose ${target_rate} pounds per week`}</h3>
                : <h3>Maintain</h3>}
            </div>
          </SlideBar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateWeightGoal({goal_weekly_weight_change_rate:target_rate, goal_weight_kg:lbsToKgs(goal_weight_lbs)});
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
  return kg;
}


export default WeightGoal;
