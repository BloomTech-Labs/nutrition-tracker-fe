import styled from "styled-components";
import theme from "../../theme";

import { Row as BS_Row } from "reactstrap";

export default styled(BS_Row)`
  ${props => theme.mixin.flex(props.direction, props.justify, props.align)}
  height: ${({ height }) => (height ? height : "auto")};
<<<<<<< HEAD
=======

>>>>>>> a363ca384e9c7c083a3bce78df42e80efda4d2d4
  /* border: 1px solid blue; */
`;
