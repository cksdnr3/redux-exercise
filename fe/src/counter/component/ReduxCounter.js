import React from 'react'

const ReduxCounter = React.memo(({ number, onIncrease, onDecrease }) => {

    return (
        <>
        <div style={{textAlign: "center"}}>
            <h1>Counter</h1>
            <div>
                <button
                aria-label="Increment value"
                onClick={onIncrease}>
                    Increment
                </button>
                <span style={{fontSize: "80px"}}>{number}</span>
                <button
                aria-label="Decrement value"
                onClick={onDecrease}>
                    Decrement
                </button>
            </div>
        </div>
        </>
    )
})

export default ReduxCounter