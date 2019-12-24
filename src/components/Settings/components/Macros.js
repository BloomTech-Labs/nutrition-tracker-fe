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
  const [carb_ratio, setCarb] = useState("");
  const [protein_ratio, setProtein] = useState("");

  useEffect(() => {
    setFat(props.data.fat_ratio);
  }, [props.data.fat_ratio]);

  useEffect(() => {
    setCarb(props.data.carb_ratio);
  }, [props.data.carb_ratio]);

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
        <ModalHeader>Macronutrient Targets</ModalHeader>
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
              <Label for="Carb">Carb</Label>
              <Input
                type="text"
                name="Carb"
                id="Carb"
                value={carb_ratio || ""}
                onChange={e => setCarb(e.target.value)}
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
              props.updateMacros({ fat_ratio, carb_ratio, protein_ratio });
            }}
          >
            Update
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              toggle();
              setFat(props.data.fat_ratio);
              setCarb(props.data.carb_ratio);
              setProtein(props.data.protein_ratio);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Macros;
