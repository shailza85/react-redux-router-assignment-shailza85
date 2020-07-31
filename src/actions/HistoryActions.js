/**
 * Redux Actions
 * Actions are "labels" for what type of functionality/manipulation
 * we will be performing/allowing on our global state data.
 * The action "names" ('type' property values), by convention, are
 * uppercase as they are representing a "constant" value.
 */

 import React from 'react';

const addToPastCalculations = (pastcalculations) => {
    return( 
        {
    type: "ADD_PAST_CALC" ,  //// Our action "label."
    value: pastcalculations
}

);
}

export default addToPastCalculations;