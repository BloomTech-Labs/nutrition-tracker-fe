import React, { useState } from "react";
import {ListStyle} from "../styles";
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
  FormText
} from "reactstrap";

const Height = props => {
  const [modal, setModal] = useState(false);

  const [feet, setFeet] = useState( props.data.height.feet);
  const [inches, setInches] = useState(props.data.height.inches);


  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Height</div>
        <div>{props.data.height.feet}'{props.data.height.inches}''</div>
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
                onChange={(e) => setFeet(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="inches">Inches</Label>
              <Input
                type="text"
                name="inches"
                id="inches"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
              />
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

export default Height;
