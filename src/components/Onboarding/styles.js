import styled, { css } from "styled-components";
import theme from "../Global/theme";
import {
  Button as BS_Button,
  Input as BS_Input,
  Container as BS_Container,
  Row as BS_Row,
  Col as BS_Col
} from "reactstrap";

export const Input = styled(BS_Input)`
  font-size: 1.6rem;
  height: ${({ height }) => (height ? height : "38px")};
`;

export const PillButton = styled(BS_Button)`
  border-radius: 50px;
  width: 100%;
  height: 45px;

  font-size: 2rem;

  margin-top: 20px;
`;

export const Header = styled.h1`
  font-size: 2.8rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled(BS_Container)`
  ${props => theme.flex(props.direction, props.justify, props.align)}
  height: 100vh;

  /* border: 1px solid red; */
`;

export const Row = styled(BS_Row)`
  ${props => theme.flex(props.direction, props.justify, props.align)}
  height: ${({ height }) => (height ? height : "auto")};

  /* border: 1px solid blue; */
`;

export const Col = styled(BS_Col)`
  ${props =>
    theme.flex(
      props.direction,
      props.justify,
      props.align
    )} /* border: 1px solid green; */
`;
