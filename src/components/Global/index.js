import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "reactstrap";

export const AppWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  background-color: ${theme.g0};
  margin: 0;
`;

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

export const Btn = styled(Button)`
  padding: 7px 15px;
  border-radius: 5px;
  &:hover {
    background: ${theme.dark};
  }
`;

export const Frm = styled(Form)``;

export const Inp = styled(Input)``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
