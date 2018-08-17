import
{INPUT_NUMBER, EQUAL} from './index';

export function inputNumber(text) { 
    return (dispatch) =>{
        dispatch({type: INPUT_NUMBER, text}); 
    }
}
export function equalNumber(value) { 
    return (dispatch) =>{
        dispatch({type: EQUAL, value}); 
    }
}
