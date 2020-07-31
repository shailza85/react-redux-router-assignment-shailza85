import React from 'react';

const addToPastCalculations = (pastcalculations) => {
    return( 
        {
    type: "ADD_PAST_CALC" ,
    value: pastcalculations
}

);
}

export default addToPastCalculations;