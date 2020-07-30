import React from 'react';
import App from './App';

import { removeToDo } from './actions/calcActions';
import {connect} from 'react-redux';

class PastCalculations extends React.Component
{
    displayCalc=()=>
    {
        //We'll grab ID from props.
        const id=this.props.uniqueId;
        console.log(id);
        //tell the reducer to do its magic.
        this.props.dispatch(removeToDo(id));
    }
    render()
    {
        return(
            <li>
               
                {this.props.result}
            </li>
        );
    }
}



export default connect(
    null
    ) (PastCalculations);