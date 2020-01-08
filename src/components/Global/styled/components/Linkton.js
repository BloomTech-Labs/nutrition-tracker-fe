import styled from "styled-components";
import theme from "../../theme";
import { Link } from "react-router-dom";

export default styled(Link)`
  background: ${theme.color.secondary};
  color: ${theme.color.light};
  padding: 11px 15px;
  border-radius: 5px;
  &:hover {
    background: ${theme.color.dark};
    text-decoration: none;
    color: ${theme.color.light};
  }
`;
