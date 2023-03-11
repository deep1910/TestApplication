import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// useSelector is for accessing the value from store.
// useDispatch is for changing the value in store
import { increment, decrement } from '../features/counter/counterSlice'
import Button from './Button'

const Sample = () => {

    const count = useSelector(state => {
        return state.counter.value
    })
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={() => dispatch(increment())} text='increment'></Button>
            <Button onClick={() => dispatch(decrement())} text='decrement'></Button>
        </div>
    )
}

export default Sample