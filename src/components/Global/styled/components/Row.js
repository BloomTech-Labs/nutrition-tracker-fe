import styled from "styled-components";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> 41866f1ba3a662890a90cd1ff02cfc284fac356c

import { Row } from "reactstrap";

const StyledRow = styled(Row)`
  align-items: ${props => (props.align ? props.align : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};

  /* border: 1px solid blue; */
`;

export default StyledRow;

StyledRow.propTypes = {
  // CUSTOM PROPTYPES
  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  height: PropTypes.string,

  // DEFAULT REACTSTRAP PROPTYPES
  noGutters: PropTypes.bool,
  form: PropTypes.bool
};

/*
  ROWS: 

    Can only be used in Containers, are the wrappers for Columns, and
    their immediate children must be Columns

  PROP-TYPES: 
    
      CUSTOM:
      
          NOTE: Rows are flex and have a flex-direction of "row" by default. 

          align:
            stretch,        stretch to fill the container (still respect min-width/max-width) (DEFAULT)
            flex-start,     cross-start margin edge of the items is placed on the cross-start line
            flex-end,       cross-end margin edge of the items is placed on the cross-end line
            center,         items are centered in the cross-axis
            baseline,       items are aligned such as their baselines align

      REACTSTRAP: 

          noGutters:        
            true,           removes the default margin from rows and default padding from columns

          https://reactstrap.github.io/components/layout/

  DOCS: 
    ReactStrap Layout:
      https://reactstrap.github.io/components/layout/
    BootStrap Layout/Grid:
      https://getbootstrap.com/docs/4.3/layout/grid/
    Flexbox:
      https://css-tricks.com/snippets/css/a-guide-to-flexbox/

*/
