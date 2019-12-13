import React from 'react';






const Deleteme = props => {
    const {foodID} = props.match.params
    console.log('here is the id:', foodID)
    return (
        <><h1>{`You have navigated successfully to the Food ID of: ${foodID} `}</h1></>
    )
}



export default Deleteme;