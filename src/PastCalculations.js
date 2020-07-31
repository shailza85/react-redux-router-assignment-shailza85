import React from 'react';

import {connect} from 'react-redux';

class PastCalculations extends React.Component
{
    
    render()
    {
        return(
            <div className="PastCalc">            
                <h2>Past Calculations</h2>
                <ul>
                {this.props.pastCalculations.map((pastCalculationsItem,index) =><li key={index}>{pastCalculationsItem}</li> )}
            </ul>
            </div>
        );
    }
}
export default connect(
state=>{return {pastCalculations:state}}
) (PastCalculations);

/** @link http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx
 * An array method is called map(). When you call this on an array, you can have it run through all the items in that array and do something interesting with them.
For every item in the array, it gives us the item itself and the position of the item in index.
It creates a new anonymous function (=>) that receives those two things as a parameter and will return a value of the modified data.
It uses the input element to create some JSX.
*/