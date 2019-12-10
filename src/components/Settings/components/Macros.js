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

  const [fat_ratio, setFat] = useState("");
  const [carbs_ratio, setCarbs] = useState("");
  const [protein_ratio, setProtein] = useState("");

  useEffect(() => {
    setFat(props.data.fat_ratio);
  }, [props.data.fat_ratio]);

  useEffect(() => {
    setCarbs(props.data.carbs_ratio);
  }, [props.data.carbs_ratio]);

  useEffect(() => {
    setProtein(props.data.protein_ratio);
  }, [props.data.protein_ratio]);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Macronutrient Targets</div>
        <div></div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Macronutrient Targets</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="fat">Fat</Label>
              <Input
                type="text"
                name="fat"
                id="fat"
                value={fat_ratio || ""}
                onChange={e => setFat(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Carbs">Carbs</Label>
              <Input
                type="text"
                name="Carbs"
                id="Carbs"
                value={carbs_ratio || ""}
                onChange={e => setCarbs(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="protein">Protein</Label>
              <Input
                type="text"
                name="protein"
                id="protein"
                value={protein_ratio || ""}
                onChange={e => setProtein(e.target.value)}
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
