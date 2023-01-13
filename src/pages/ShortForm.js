import React, { useState } from 'react';

const ShortForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = event =>{
        event.preventDefault()
        const data = {
            firstName, lastName, email, password
        }
        console.log(data)
    }
    return (
        <div className='flex h-screen flex-col pt-10 w-full justify-center items-center bg-teal-700'>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col bg-teal-600 p-20 rounded shadow-lg'>
                    <label htmlFor="name" className='my-2 font-semibold text-sm'>First Name</label>
                    <input onBlur={(e)=> setFirstName(e.target.value)} placeholder="Your First Name" className="rounded p-2 outline-none" type="text" id='name' name='name' />
                    <label htmlFor="name" className='my-2 font-semibold text-sm'>Last Name</label>
                    <input onBlur={(e)=> setLastName(e.target.value)} placeholder="Your Last Name" className="rounded p-2 outline-none" type="text" id='name' name='name' />
                    <label htmlFor="name" className='my-2 font-semibold text-sm'>Email</label>
                    <input onBlur={(e)=> setEmail(e.target.value)} placeholder="Your Email" className="rounded p-2 outline-none" type="email" id='name' name='name' />
                    <label htmlFor="name" className='my-2 font-semibold text-sm'>Password</label>
                    <input onBlur={(e)=> setPassword(e.target.value)} placeholder="Your Password" className="rounded p-2 outline-none" type="password" id='name' name='name' />
                    <button type='submit' className='px-5 py-2 bg-red-700 text-white rounded mt-3'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ShortForm;