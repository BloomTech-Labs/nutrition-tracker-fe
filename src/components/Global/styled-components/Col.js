import styled from "styled-components";
import theme from "../Global/theme";

import { Col as BS_Col } from "reactstrap";

export const Col = styled(BS_Col)`
  ${props =>
    theme.flex(
      props.direction,
      props.justify,
      props.align
    )} /* border: 1px solid green; */
`;
