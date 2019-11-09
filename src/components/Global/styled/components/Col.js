import styled from "styled-components";
import theme from "../../theme";

import { Col as BS_Col } from "reactstrap";

export default styled(BS_Col)`
  /* border: 1px solid green; */
  ${props => theme.mixin.flex(props.direction, props.justify, props.align)}
`;

/*
  Columns: 
  
    The immediate children of Rows in Bootstraps Layout system. Columns wrap
    the content of your page.

  Reactstrap PropTypes:

    (Visit: https://reactstrap.github.io/components/layout/ for complete list)
  
  Docs:
    https://reactstrap.github.io/components/layout/
    https://getbootstrap.com/docs/4.1/layout/grid/

*/
