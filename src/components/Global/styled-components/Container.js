import styled from "styled-components";
import theme from "../Global/theme";

import { Container as BS_Container } from "reactstrap";

export default styled(BS_Container)`
  ${props => theme.flex(props.direction, props.justify, props.align)}
  height: 100vh;

  /* border: 1px solid red; */
`;
