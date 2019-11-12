import styled from "styled-components";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "stretch")};

  height: ${props => (props.height ? props.height : "100vh")};

  /* border: 1px solid red; */
`;

export default StyledContainer;

StyledContainer.propTypes = {
  // CUSTOM PROPTYPES
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
  height: PropTypes.string,

  // DEFAULT REACTSTRAP PROPTYPES
  fluid: PropTypes.bool
};

/*
  CONTAINER:
  
      The most basic layout element in Bootstrap, required when using bootstrap's Grid system. 
      While containers can be nested, most layouts do not require a nested container.

      Containers can contain any type of content, but to take advantage of 
      bootstrap's Layout system, wrap your content in Rows & Columns

  PROP-TYPES: 

      CUSTOM:
        
          NOTE: Containers have a flex direction of "column" by default. 
                justify-content will work along the cross (or vertical) axis while flex-direction is "column"
                align-items will work along the main (or horizontal) axis while flex-direction is "column"

                The descriptions below reflect this reversal:

          justify: 
            flex-start,     items are packed toward the cross-start line (DEFAULT)
            flex-end,       items are packed toward to cross-end line
            center,         items are centered along the cross-line
            space-between,  items are evenly distributed in the cross-line; first item is on the cross-start line, 
                            last item on the cross-end line
            space-around,   items are evenly distributed in the cross-line with equal space around them
            space-evenly,   items are distributed so that the spacing between any two adjacent alignment 
                            subjects, before the first alignment subject, and after the last alignment subject is the same

          align:
            stretch,        stretch to fill the container (still respect min-width/max-width) (DEFAULT)
            flex-start,     main-start margin edge of the items is placed on the main-start line 
            flex-end,       main-end margin edge of the items is placed on the main-end line
            center,         items are centered in the main-axis
            baseline,       items are aligned such as their baselines align

          height:
            100vh,          default height to fill the viewport height, can be over-ridden

      DEFAULT REACTSTRAP: 

        fluid:
          false,          fixed-width container (meaning its max-width changes at each breakpoint)
          true,           fluid-width (meaning it's 100% wide all of the time)

        https://reactstrap.github.io/components/layout/

  DOCS: 
    ReactStrap Layout:
      https://reactstrap.github.io/components/layout/
    BootStrap Layout:
      https://getbootstrap.com/docs/4.1/layout/overview/
    Flexbox:
      https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/
