import React, { useState } from "react";
import ListStyle from "../styles";
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

const Macros = props => {
  const [modal, setModal] = useState(false);

  const [fat, setFat] = useState( props.data.fat);
  const [carbs, setCarbs] = useState(props.data.carbs);
  const [protein, setProtein] = useState(props.data.protein);


  const toggle = () => setModal(!modal);

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Macronutrient Targets</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Macros</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="fat">Fat</Label>
              <Input
                type="text"
                name="fat"
                id="fat"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="carbs">Carbs</Label>
              <Input
                type="text"
                name="carbs"
                id="carbs"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="protein">Protein</Label>
              <Input
                type="text"
                name="protein"
                id="protein"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
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

export default Macros;
