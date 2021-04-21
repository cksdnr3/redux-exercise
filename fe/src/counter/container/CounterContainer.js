import React, { useCallback } from 'react'
import ReduxCounter from '../component/ReduxCounter'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../reducer/counter.reducer'

const CounterContainer = () => {
    const number = useSelector(state => {
        console.log("selector state: " + JSON.stringify(state))
        
        return state.counterReducer.number
    })

    const dispatch = useDispatch()

    const onIncrease = useCallback(() => {
        dispatch(increase(3))
    }, [dispatch])

    const onDecrease = useCallback(() => {
        dispatch(decrease(1))
    }, [dispatch])

    return (
        <>
        <ReduxCounter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </>
    )
}

export default CounterContainer