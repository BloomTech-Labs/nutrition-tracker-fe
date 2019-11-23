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
} from "reactstrap";

const Password = props => {
  const [modal, setModal] = useState(false);

  // const [password, setPassword] = useState(props.data.password);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Password</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Password</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="text"
                name="password"
                id="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
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

export default Password;
