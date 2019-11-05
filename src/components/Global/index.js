import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";
import { Button as Btn, Form as Frm, Input as Inp } from "reactstrap";

export const AppWrapper = styled.div`
  min-height: 100vh;
  font-size: 2vh;
  text-align: center;
  background-color: ${theme.g0};
  margin: 0;
`;

// Linkton because it's a react router link that looks like a bootstrap button
export const Linkton = styled(Link)`
  background: ${theme.secondary};
  color: ${theme.light};
  padding: 11px 15px;
  border-radius: 5px;
  &:hover {
    background: ${theme.dark};
    text-decoration: none;
    color: ${theme.light};
  }
`;

export const Button = styled(Btn)`
  padding: 7px 15px;
  border-radius: 5px;
  &:hover {
    background: ${theme.dark};
  }
`;

export const Form = styled(Frm)``;

export const Input = styled(Inp)``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
