import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top:35vh;
`;

class Loading extends React.Component {

    render(){

        return(
            <Wrapper>
              <Loader 
                type="BallTriangle"
                color="#00BFFF"
                height={175}
                width={175}
                timeout={5000} //5 secs
              />
              </Wrapper>
         )
        };
};


export default Loading ;