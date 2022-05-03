import {ADD_NUMBER, SUB_NUMBER} from './actionsTypes'

const initialState = 0

const reducerCounter = (state = initialState, action) => {
    switch (action.type){
        case ADD_NUMBER:
            const {plusOne} = action;
            return plusOne

        case SUB_NUMBER:
            const {minusOne} = action;
            return minusOne
        
        default:
            return state;
    }
}
export default reducerCounter