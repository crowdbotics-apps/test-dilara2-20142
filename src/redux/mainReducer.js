import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn1199511Reducer from '../features/SignIn1199511/redux/reducers'
import SignUp2299510Reducer from '../features/SignUp2299510/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn1199511: SignIn1199511Reducer,
SignUp2299510: SignUp2299510Reducer,

});