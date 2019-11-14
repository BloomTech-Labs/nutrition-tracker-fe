import React, { useState } from "react";
import ListStyle from "../styles";
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
  Input,
  FormText
} from "reactstrap";

const Gender = props => {
  const [modal, setModal] = useState(false);

  const [gender, setGender] = useState(props.data);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Gender</div>
        <div>{gender}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Gender</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Label for="exampleCustomSelect">Custom Select</Label>
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="customSelect"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
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

export default Gender;
