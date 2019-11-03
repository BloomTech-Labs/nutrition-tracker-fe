import styled from "styled-components";
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
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "stretch")};

  height: 100vh;

  /* border: 1px solid red; */
`;

export const Row = styled(BS_Row)`
  display: flex;

  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "stretch")};

  height: ${({ height }) => (height ? height : "auto")};

  /* border: 1px solid blue; */
`;

export const Col = styled(BS_Col)`
  display: flex;

  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "stretch")};

  /* border: 1px solid green; */
`;
