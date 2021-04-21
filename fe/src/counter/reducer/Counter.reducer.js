import { createAction, handleActions } from 'redux-actions'

const INCREASE = "counter/INCREASE"
const DECREASE = "counter/DECREASE"

export const increase = createAction(INCREASE, plus => {return plus})
export const decrease = createAction(DECREASE, minus => minus)

console.log("crate Action increase: " + typeof increase)

const initialState = {
    number: 0,
}

const counterReducer = handleActions({
    [INCREASE]: (prevState, action) => {
        console.log("increase state: " + JSON.stringify(prevState))
        console.log("handleActions increase action: " + JSON.stringify(action))
        console.log("call increase")
        return ({
        number: prevState.number + action.payload
    })},
    [DECREASE]: (prevState, action) => {
        console.log("decrease state: " + JSON.stringify(prevState))
        console.log("call decrease")
        console.log("handleActions decrease action: " + JSON.stringify(action))
        return ({
        number: prevState.number - action.payload
    })}
}, initialState)

console.log("handle Action counterReducer: " + counterReducer)

export default counterReducer