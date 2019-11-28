import React, { useState, useEffect } from "react";
import {ListStyle} from "../styles";
import moment from "moment";
import {InputGroupWithIcon} from "../../Global/styled/index";
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
import { CalendarSVG } from "../../Global/icons";

const Dob = props => {
  const [modal, setModal] = useState(false);

  const [dob, setDob] = useState("");

  useEffect(()=> {
    console.log("[useEffect]", props.data.dob);
    setDob(props.data.dob);
  }, [props.data.dob])

  const toggle = () => setModal(!modal);
  console.log(dob)
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Date Of Birth</div>
        <div>{moment(dob).format("MMM Do YY")}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Date Of Birth</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="dob">Date Of Birth</Label>
              <InputGroupWithIcon
                type="date"
                name="date_of_birth"
                icon={CalendarSVG}
                placeholder="MM/DD/YYYY"
                handleChange={(e) => setDob(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
        <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser({dob: toIsoDateString(dob)});
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

function toIsoDateString(date) {
  return new Date(date).toISOString()
}


export default Dob;
