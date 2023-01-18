import { actionTypes } from "./actionTypes"

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    education: '',
    number: 0,
    feedback: '',
    term: false
}
export const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case actionTypes.INPUT:{
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        }
        case actionTypes.TOGGLE:{
            return {
                ...state,
                [action.payload.name] : !state.term
            }
        }
        case actionTypes.PLUS:{
            return{
                ...state,
                number : state.number + 1
            }
        }
        case actionTypes.MINUS:{
            return{
                ...state,
                number : state.number - 1
            }
        }
        default:
            return state;
    }
}