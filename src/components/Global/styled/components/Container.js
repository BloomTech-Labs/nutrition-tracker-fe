import styled from "styled-components";
import theme from "../../theme";

import { Container as BS_Container } from "reactstrap";

export default styled(BS_Container)`
  ${props => theme.mixin.flex(props.direction, props.justify, props.align)}
  height: 100vh;
`;
