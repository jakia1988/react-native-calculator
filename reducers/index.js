import { combineReducers } from 'redux';
import {calcReducer} from './calculationReducer'
const rootReducer = combineReducers({
    calcReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})


export default rootReducer;
