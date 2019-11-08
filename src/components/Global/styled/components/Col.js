import styled from "styled-components";
import theme from "../../theme";

import { Col as BS_Col } from "reactstrap";

export default styled(BS_Col)`
  ${props =>
    theme.mixin.flex(
      props.direction,
      props.justify,
      props.align
    )} /* border: 1px solid green; */
`;
