import
{INPUT_NUMBER, EQUAL} from '../actions';

const calcState = {
    value: 0
} 

export const calcReducer = (state = calcState, action) => {      
    switch (action.type) {
        case INPUT_NUMBER:
            return {...state,
                value: state.value == 0 ? action.text : state.value + action.text}
        
        case EQUAL:
                return {...state, value: eval(action.value)}
         default:
            return state;
    }    
};
