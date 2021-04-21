import React from 'react'
import RTKCounter from '../component/RTKCounter'
import { useDispatch, useSelector } from 'react-redux'
import { DECREASE, INCREASE } from '../reducer/counter.slice'


const RTKCounterContainer = () => {

    const dispatch = useDispatch()

    return (
        <>
        <RTKCounter number={useSelector(state => state.counterSlice.number)} onIncrease={() => dispatch(INCREASE(1))} onDecrease={() => dispatch(DECREASE(1))} />
        </>
    )
}
export default RTKCounterContainer