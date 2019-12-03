import styled from "styled-components";
import theme from "../../theme";
import { Button } from "../index";

export default styled(Button)`
  width: 204px;
  border-radius: 25px;
  height: 40px;
  background: ${theme.color.light};
  color: ${theme.color.dark};
  font-weight: bold;
  font-size: 1.4rem;
`;
