import React from "react";
import styled from "styled-components";
import { PillButton as PB, Header, Row, Col } from "../styles";
import { GoogleSVG, FacebookSVG, EmailSVG } from "../../../assets/svg-icons";
import { Input, Label } from "reactstrap";

const Register = ({ history, path }) => {
  const handleClick = () => {
    // do whatever this thang's gunna do
  };

  return (
    <>
      <Row>
        <Col justify="center">
          <Header>Sign up and save your settings!</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={handleClick} color="secondary">
            <EmailSVG /> <ButtonLabel>Sign up with Email</ButtonLabel>
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <Label> Email</Label>
        </Col>
        <div className="w-100"></div>
        <Col>
          <Input />
        </Col>
        <div className="w-100"></div>
      </Row>
    </>
  );
};

const PillButton = styled(PB)`
  text-align: left;
`;

const ButtonLabel = styled.span`
  font-size: 1.6rem;
  margin-left: 20%;
  text-align: center;
  color: black;
`;

export default Register;
