import styled from "styled-components";
import theme from "../../theme";

import { Container as BS_Container } from "reactstrap";

export default styled(BS_Container)`
  ${props => theme.mixin.flex(props.direction, props.justify, props.align)}
  height: 100vh;
<<<<<<< HEAD
=======

>>>>>>> a363ca384e9c7c083a3bce78df42e80efda4d2d4
  /* border: 1px solid red; */
`;
