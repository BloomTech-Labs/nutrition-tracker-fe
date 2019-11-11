import styled from "styled-components";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

export const StyledInput = styled(Input)`
  font-size: 1.6rem;
  height: ${props => (props.height ? props.height : "38px")};
`;

export default StyledInput;

StyledInput.propTypes = {
  height: PropTypes.string
};

/*
  INPUT:

    Standard Reactstrap Input with a default font-size.

  CUSTOM PROP-TYPES:

    height:
      38px,          default height is 38px, can be over-written with any value

  DOCS:
    Reactstrap:
      As part of a Form: https://reactstrap.github.io/components/form/
      As part of an InputGroup: https://reactstrap.github.io/components/input-group/
    Boostrap:
      As a part of a Form: https://getbootstrap.com/docs/4.3/components/forms/
      As a part of an InputGroup: https://getbootstrap.com/docs/4.3/components/input-group/
*/
