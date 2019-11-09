import styled from "styled-components";

import { Row as BS_Row } from "reactstrap";

export default styled(BS_Row)`
  /* border: 1px solid blue; */
  height: ${props => (props.height ? props.height : "auto")};
`;

/*
  Rows:

    Can only be used in Containers, are the wrappers for Columns, and
    their immediate children must be Columns

  Reactstrap PropTypes:

    Row.propTypes = {
      noGutters: PropTypes.bool,
      // see https://reactstrap.github.io/components/form Form Grid with Form Row
      form: PropTypes.bool
    }

    noGutters=true - removes the default margin from rows and default padding from 
                    columns
  
  Docs:

    https://reactstrap.github.io/components/layout/
    https://getbootstrap.com/docs/4.1/layout/grid/

*/
