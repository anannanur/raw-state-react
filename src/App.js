
import { createContext, useState } from 'react';
import './App.css';
import Counter from './pages/Counter';
// import Parent from './pages/Parent';
// import ShortForm from './pages/ShortForm';
export const COUNTER_CONTEXT = createContext()

function App() {
  const [count, setCount] = useState(0)
  const value = {count, setCount}
  return (
    // <div className='flex h-screen pt-10 w-full justify-center items-center bg-red-700'>
    //   <div className='bg-red-600 text-center text-white p-20 rounded'>
    //     <h1 className='text-xl mb-1'>Counter</h1>
    //     <p className='my-3'>{count}</p>
    //     <div className='mt-5'>
    //       <button onClick={() => setCount( count + 1)} className='bg-slate-700 py-2 px-5  mr-2 border-0 outline-0 rounded'>Increment</button>
    //       <button onClick={()=> setCount((preState) => preState - 1)} className='bg-slate-700 py-2 px-5 border-0 outline-0 rounded'>Decrement</button>
    //     </div>
    //   </div>
    // </div>
    
     <COUNTER_CONTEXT.Provider value={value}>
       {/* <Parent /> */}
       {/* <ShortForm/> */}
       <Counter/>
     </COUNTER_CONTEXT.Provider>


  );
}

export default App;
