import React, { useState, useEffect } from "react";
import { ListStyle } from "../styles";
import {
  getUserInfo,
} from "../../../store/actions/updateUserSettings";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem,
  CustomInput,
  Input,
  Form,
  FormGroup,
  Label
} from "reactstrap";

const Gender = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [sex, setSex] = useState("");

  useEffect(()=> {
    setSex(props.data.sex);
  }, [props.data.sex])

  return (
    <div>
      <ListGroupItem onClick={toggle} style={ListStyle}>
        <div>Gender</div>
        <div>{sex}</div>
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Gender</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="sex">Gender</Label>
              {/* <CustomInput
                type="select"
                id="sex"
                name="sex"
                value={state.sex}
                onChange={e => changeState({ sex: e.target.value })}
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </CustomInput> */}
              <Input
                type="text"
                name="sex"
                id="sex"
                value={sex}
                onChange={e => setSex(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              props.updateUser(sex);
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

// const mapStateToProps = state => {
//   return {
//     userInfo: state.getUserInfo
//   };
// };

// export default connect(mapStateToProps, {getUserInfo})(
//   Gender
// );

export default Gender
