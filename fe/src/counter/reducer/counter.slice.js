import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: { number: 0 },
    reducers: {
        INCREASE: (state, action) => {
            console.log("*slice* increase state: " + JSON.stringify(state))
            console.log("*slice* increase action: " + JSON.stringify(action))
            console.log("call *slice* increase")
            return ({
                number: state.number + action.payload
            })
        },

        DECREASE: (state, action) => {
            console.log("*slice* decrease state: " + JSON.stringify(state))
            console.log("*slice* call decrease")
            console.log("*slice* decrease action: " + JSON.stringify(action))
            return ({
                number: state.number - action.payload
            })
        }
    }
})

console.log("slice: " + JSON.stringify(counterSlice))

export const { INCREASE, DECREASE } = counterSlice.actions

export default counterSlice.reducer