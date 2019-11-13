import React from 'react';
import Loading from './Loading';

export default (Component) => {
    return function withLoadingComponent({isLoading, ...props}){
        if(!isLoading) return (<Component {...props} />) 
          return (<Loading/>)
    };
};

