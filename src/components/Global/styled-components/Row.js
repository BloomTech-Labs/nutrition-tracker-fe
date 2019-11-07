import styled from "styled-components";
import theme from "../Global/theme";

import { Row as BS_Row } from "reactstrap";

export default styled(BS_Row)`
  ${props => theme.flex(props.direction, props.justify, props.align)}
  height: ${({ height }) => (height ? height : "auto")};

  /* border: 1px solid blue; */
`;
