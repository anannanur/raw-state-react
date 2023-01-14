import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === 'INCREMENT') {
            return state + action.payload.count;
        }
        else if (action.type === 'DECREMENT') {
            return state - action.payload.count;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='flex h-screen flex-col pt-10 w-full justify-center items-center bg-amber-700'>

            <h1 className='text-2xl mb-2'>COUNTER</h1>
            <div className='bg-amber-600 text-center text-white py-10 px-20 flex flex-col justify-center items-center rounded mb-3'>
                <h1 className='text-4xl mb-3'>{state}</h1>
                <div className='mt-5'>
                    <button onClick={() => dispatch({ type: 'INCREMENT', payload: {count : 5} })} className='bg-slate-700 py-2 px-5  mr-2 border-0 outline-0 rounded'>Increment</button>
                    <button onClick={() => dispatch({ type: 'DECREMENT', payload: {count : 5} })} className='bg-slate-700 py-2 px-5 border-0 outline-0 rounded'>Decrement</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;