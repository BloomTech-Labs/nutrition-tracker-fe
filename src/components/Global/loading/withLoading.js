import React from 'react';
import Loading from './Loading';

function withLoading(Component) {
    return function withLoadingComponent({isloading, ...props}){
        if(!isloading) return (<Component {...props} />) 
          return (<Loading/>)
    };
}

export default withLoading;