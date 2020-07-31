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