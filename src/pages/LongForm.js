import React, { useReducer } from 'react';

const LongForm = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        education: '',
        number: 0,
        feedback: '',
        term: false
    }
    const reducer = (state, action) => {
        // console.log(action)
        switch (action.type) {
            case 'INPUT':{
                return {
                    ...state,
                    [action.payload.name] : action.payload.value
                }
            }
            case 'TOGGLE':{
                return {
                    ...state,
                    [action.payload.name] : !state.term
                }
            }
            case 'PLUS':{
                return{
                    ...state,
                    number : state.number + 1
                }
            }
            case 'MINUS':{
                return{
                    ...state,
                    number : state.number - 1
                }
            }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const submit = e => {
        e.preventDefault()
        console.log('Form Submitted')
        console.log(state)

    }
    return (
        <div className='h-screen w-screen flex justify-center items-center overflow-auto'>
            <form onSubmit={submit} action="" className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="" className='mb-2'>
                        First Name
                    </label>
                    <input onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                        type="text" className="form-input focus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300"
                        name='firstName' placeholder='First Name' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="" className='mb-2'>
                        Last Name
                    </label>
                    <input onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    type="text" className="form-input focus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300" 
                    name='lastName' placeholder='Last Name' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="" className='mb-2'>
                        Email
                    </label>
                    <input onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    type="email" className="form-inputfocus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300" 
                    name='email' placeholder='Your Email' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <h1 className='mb-3'>Gender</h1>
                    <div className='flex gap-3'>
                        <div className='flex items-center justify-center'>
                            <input onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                            className="checked:bg-lime-400 checked:hover:bg-lime-500 checked:active:bg-lime-500 checked:focus:bg-lime-500 focus:bg-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" type='radio' name='gender' value='male' />
                            <label className='ml-2 text-lg' for='male'>Male</label>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                            className="checked:bg-lime-400 checked:hover:bg-lime-500 checked:active:bg-lime-500 checked:focus:bg-lime-500 focus:bg-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" type='radio' name='gender' value='female' />
                            <label className='ml-2 text-lg' for='female'>Female</label>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                            className="checked:bg-lime-400 checked:hover:bg-lime-500 checked:active:bg-lime-500 checked:focus:bg-lime-500 focus:bg-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" type='radio' name='gender' value='other' />
                            <label className='ml-2 text-lg' for='other'>Other</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' for='education'>Education</label>
                    <select onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    name="education" id="education" className='focus:outline-none focus:ring focus:ring-lime-300 form-input px-4 py-2 rounded-md border border-gray-300'>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="undergraduate">Under Graduate</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3'>Number of PCs</label>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='bg-lime-500 cursor-pointer text-lg flex justify-center items-center text-white rounded h-10 w-10'
                        onClick={()=> dispatch({type : 'MINUS'})}>-</div>
                        <div className='flex justify-center items-center h-10 rounded-md border flex-1 border-gray-400'><span>{state.number}</span></div>
                        <div className='bg-lime-500 cursor-pointer flex justify-center items-center text-lg text-white rounded h-10 w-10 '
                        onClick={()=> dispatch({type : 'PLUS'})}>+</div>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' for="feedback">Feedback</label>
                    <textarea onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    name='feedback' placeholder="Give ur Feedback" id='feedback' cols='30' rows='4' className='form-input focus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300'></textarea>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-center items-center max-w-xs'>
                        <input
                            className='mr-3 bg-lime-100 border-lime-300 text-lime-500 focus:ring-lime-200'
                            type='checkbox'
                            name='term'
                            id='term'
                            onClick={(e)=> dispatch({type: 'TOGGLE', payload: {name : e.target.name}})}
                        />
                        <label for='term' >I accept all terms & conditions</label>
                    </div>
                    <button
                        className=' px-4 py-3 bg-lime-500 rounded-md font-semibold text-white text-lg disabled:bg-lime-300'
                        type='submit'
                        disabled={!state.term}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LongForm;