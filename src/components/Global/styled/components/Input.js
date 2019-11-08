import styled from "styled-components";
import { Input as BS_Input } from "reactstrap";

export default styled(BS_Input)`
  font-size: 1.6rem;
  height: ${({ height }) => (height ? height : "38px")};
`;
