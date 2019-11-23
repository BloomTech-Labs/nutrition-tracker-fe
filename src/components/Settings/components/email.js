import React, { useState, useEffect } from "react";
import {ListStyle} from "../styles";
import {getUserInfo, updateUserInfo} from "../../../store/actions/updateUserSettings";
import { connect } from "react-redux";
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

const Email = props => {
  const [modal, setModal] = useState(false);
  

  const [state, changeState] = useState(props.data)
  //const [email, setEmail] = useState(props.userInfo.email);

  // useEffect(() => {
  //   const id = 1

  //   //Calls action to get specific user
  //   props.getUserInfo(id);
    
  // });

  const toggle = () => setModal(!modal);
  
  console.log(props.userInfo)
  return (
    
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Email</div>
        <div>{props.data.email}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Email</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={state.email}
                onChange={(e) => changeState({email:e.target.value})}
              />
            </FormGroup>  
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
          toggle();
          props.updateUser(state);
        }}>
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

const mapStateToProps = state => {
  return{
    userInfo: state.getUserInfo
  }
};

export default connect(mapStateToProps, { getUserInfo, updateUserInfo })(Email);
