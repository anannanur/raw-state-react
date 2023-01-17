import React from 'react';

const LongForm = () => {
    const submit = e =>{
        e.preventDefault()
    }
    return (
        <div className='h-screen w-screen flex justify-center items-center overflow-auto'>
            <form onSubmit={submit} action="" className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="" className='mb-2'>
                        First Name
                    </label>
                    <input type="text" className="form-input focus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300" name='firstName' placeholder='First Name' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="" className='mb-2'>
                        Last Name
                    </label>
                    <input type="text" className="form-input focus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300" name='lastName' placeholder='Last Name' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="" className='mb-2'>
                        Email
                    </label>
                    <input type="email" className="form-inputfocus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300" name='email' placeholder='Your Email' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <h1 className='mb-3'>Gender</h1>
                    <div className='flex gap-3'>
                        <div className='flex items-center justify-center'>
                            <input className="checked:bg-lime-400 checked:hover:bg-lime-500 checked:active:bg-lime-500 checked:focus:bg-lime-500 focus:bg-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" type='radio' name='gender' value='male' />
                            <label className='ml-2 text-lg' for='male'>Male</label>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input className="checked:bg-lime-400 checked:hover:bg-lime-500 checked:active:bg-lime-500 checked:focus:bg-lime-500 focus:bg-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" type='radio' name='gender' value='female' />
                            <label className='ml-2 text-lg' for='female'>Female</label>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input className="checked:bg-lime-400 checked:hover:bg-lime-500 checked:active:bg-lime-500 checked:focus:bg-lime-500 focus:bg-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500" type='radio' name='gender' value='other' />
                            <label className='ml-2 text-lg' for='other'>Other</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' for='education'>Eductaion</label>
                    <select name="education" id="education" className='focus:outline-none focus:ring focus:ring-lime-300 form-input px-4 py-2 rounded-md border border-gray-300'>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="undergraduate">Under Graduate</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3'>Number of PCs</label>
                    <div className='flex justify-between items-center gap-2'>
                        <button className='bg-lime-500 text-lg text-white rounded h-10 w-10 '>-</button>
                        <div className='flex justify-center items-center h-10 rounded-md border flex-1 border-gray-400'><span>0</span></div>
                        <button className='bg-lime-500 text-lg text-white rounded h-10 w-10 '>+</button>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' for="feedback">Feedback</label>
                    <textarea name='feedback' id='feedback' cols='30' rows='4' className='form-input focus:outline-none focus:ring focus:ring-lime-300 px-4 py-2 rounded-md border border-gray-300'></textarea>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-center items-center max-w-xs'>
                        <input
                            className='mr-3 bg-lime-100 border-lime-300 text-lime-500 focus:ring-lime-200'
                            type='checkbox'
                            name='term'
                            id='term'
                        />
                        <label for='term' >I agree to terms and conditions</label>
                    </div>
                    <button
                        className=' px-4 py-3 bg-lime-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LongForm;