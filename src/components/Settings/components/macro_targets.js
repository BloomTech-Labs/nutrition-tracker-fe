import React, { useState, useEffect } from "react";
import { ListStyle } from "../styles";
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
  Input
} from "reactstrap";

const Macros = props => {
  const [modal, setModal] = useState(false);

  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");

  useEffect(() => {
    setFat(props.data.fat_ratio);
  }, [props.data.fat_ratio]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Macronutrient Targets</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Macronutrient Targets</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Macronutrient Targets</Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={email || ""}
                onChange={e => setMac(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser({ fat_ratio, carbs_ratio, protein_ratio });
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

export default Macros;
