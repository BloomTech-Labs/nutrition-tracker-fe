import styled from "styled-components";
import PropTypes from "prop-types";

import { Col } from "reactstrap";

const StyledColumn = styled(Col)`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "stretch")};

  height: ${props => (props.height ? props.height : "auto")};

  /* border: 1px solid green; */
`;

export default StyledColumn;

StyledColumn.propTypes = {
  // CUSTOM PROPTYPES
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),

  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  height: PropTypes.string

  // FOR DEFAULT REACTSTRAP PROPTYPES
  // SEE: https://reactstrap.github.io/components/layout/
};

/*
  COL:
  
    The immediate children of Rows in Bootstraps Layout system. 
    Columns wrap the content of your page.

  PROP-TYPES:
      
      CUSTOM:

          direction:
            row,            same as text direction (DEFAULT)
            row-reverse,    opposite to text direction
            column,         same as row but top to bottom
            column-reverse, same as row-reverse top to bottom

          justify:
            flex-start,     items are packed toward the start line (DEFAULT)
            flex-end,       items are packed toward to end line
            center,         items are centered along the line
            space-between,  items are evenly distributed in the line; first item is on the start line, last item on the end line
            space-around,   items are evenly distributed in the line with equal space around them
            space-evenly,   items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same

          align:
            stretch,        stretch to fill the container (still respect min-width/max-width) (DEFAULT)
            flex-start,     cross-start margin edge of the items is placed on the cross-start line
            flex-end,       cross-end margin edge of the items is placed on the cross-end line
            center,         items are centered in the cross-axis
            baseline,       items are aligned such as their baselines align

      DEFAULT REACTSTRAP:

          Reactstrap Docs:
            Reactstrap:     https://reactstrap.github.io/components/layout/
            Bootstrap:      https://getbootstrap.com/docs/4.3/layout/grid/
        
  DOCS: 
      ReactStrap Layout:
        https://reactstrap.github.io/components/layout/
      BootStrap Layout/Grid:
        https://getbootstrap.com/docs/4.3/layout/grid/
      Flexbox:
        https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/
