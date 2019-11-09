import styled from "styled-components";

import { Container as BS_Container } from "reactstrap";

export default styled(BS_Container)`
  /* border: 1px solid red; */
  height: ${props => (props.height ? props.height : "auto")};
`;

/*
  Container:
  
    The most basic layout element in Bootstrap and is required when using the 
    default grid system. While containers can be nested, most layouts do not 
    require a nested container.

    Containers can contain any type of content, but to take advantage of 
    bootstrap's Layout system, wrap your content in Rows & Columns

  Reactstrap PropTypes:

    Container.propTypes = {
      fluid:  PropTypes.bool
    }

    fluid=false - fixed-width container (meaning its max-width changes at each breakpoint)
    fluid=true  - fluid-width (meaning it's 100% wide all of the time)
    
  Docs:
    https://reactstrap.github.io/components/layout/
    https://getbootstrap.com/docs/4.1/layout/overview/
*/
