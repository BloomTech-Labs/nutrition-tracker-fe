import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { CalendarSVG } from "../../Global/icons";
import { InputGroupWithIcon } from "../../Global/styled/index";
import { ListStyle } from "../styles";

const Dob = props => {
  const [modal, setModal] = useState(false);

  const [dob, setDob] = useState("");

  useEffect(() => {
    setDob(props.data.dob);
  }, [props.data.dob]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Date Of Birth</div>
        {/* Formats date to be displayed to the user */}
        <div>{moment(dob).utc().format("MMM DD YY")}</div>
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
                handleChange={e => setDob(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser({ dob: toIsoDateString(dob) });
            }}
          >
            Update
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              toggle();
              setDob(props.data.dob);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

//Formats the date how the DB needs it.
function toIsoDateString(date) {
  return new Date(date).toISOString();
}

export default Dob;
