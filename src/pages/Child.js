import React from 'react';

const Child = ({count, setCount}) => {
    return (
            <div className='bg-red-600 text-center text-white p-20 rounded'>
                <h1 className='text-xl mb-1'>Child</h1>
                <p className='my-3'>{count}</p>
                <div className='mt-5'>
                    <button onClick={() => setCount(count + 1)} className='bg-slate-700 py-2 px-5  mr-2 border-0 outline-0 rounded'>Increment</button>
                    <button onClick={() => setCount((preState) => preState - 1)} className='bg-slate-700 py-2 px-5 border-0 outline-0 rounded'>Decrement</button>
                </div>
            </div>
    );
};

export default Child;