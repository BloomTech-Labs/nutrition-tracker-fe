import React from "react";
import styled from "styled-components";
import { PillButton as PB, Header, Row, Col } from "../styles";
import { GoogleSVG, FacebookSVG, EmailSVG } from "../../../assets/svg-icons";

const RegistrationOptions = ({ history, path }) => {
  const handleClick = () => {
    history.push(`${path}/register`);
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
          <PillButton onClick={handleClick} color="light">
            <GoogleSVG /> <ButtonLabel>Sign up with Google</ButtonLabel>
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton onClick={handleClick} color="light">
            <FacebookSVG /> <ButtonLabel>Sign up with Facebook</ButtonLabel>
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton onClick={handleClick} color="light">
            <EmailSVG /> <ButtonLabel>Sign up with Email</ButtonLabel>
          </PillButton>
        </Col>
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
`;

export default RegistrationOptions;
