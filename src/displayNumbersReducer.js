/**
 * Redux Reducer
 * A reducer will actually carry out the manipulation/mutation on the
 * state data. It should expect an "action" to be passed in with any
 * necessary target data to perform its duty.
 */
const displayNumberReducer = ( state = [], action ) => { // Default state is an empty array here.
  switch ( action.type )
  {
    // What happens if we are adding a new to-do:
    case 'ADD_PAST_CALC':
      //Create a new array (with the same contents as the original.)
      const updatedState=state.slice();
      updatedState.push( action.value);
      return updatedState;
      default:
          return state;
  }
}
export default displayNumberReducer;

