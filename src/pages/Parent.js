import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {
    
    const {count} = useContext(COUNTER_CONTEXT)
    return (
        <div className='flex h-screen flex-col pt-10 w-full justify-center items-center bg-red-700'>
            
            <h1 className='text-2xl mb-2'>COUNTER</h1>
            <div className='bg-red-600 text-center text-white p-20 rounded mb-3'>
                <h1 className='text-xl mb-1'>Parent</h1>
                <p className='my-3'>{count}</p>
            </div>
            <Child/>
        </div>
    );
};

export default Parent;