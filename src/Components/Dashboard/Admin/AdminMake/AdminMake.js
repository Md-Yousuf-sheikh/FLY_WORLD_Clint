import React, { useState } from 'react';

const AdminMake = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handelOnBlur = e => {
        setEmail(e.target.value)
    }

    const handelAdminSubmit = e => {
        const user = { email }
        fetch('https://vast-cove-03076.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setEmail('')
                    setSuccess(true)
                }

            })

        e.preventDefault();
    }
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            {
                success && <div
                    className="bg-green-200 px-6 mb-4 py-2 rounded-md text-md flex items-center mx-auto w-3/4 xl:w-2/4"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                    >
                        <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                    </svg>
                    <span className="text-green-800"> Make New Admin Successfully! </span>
                </div>
            }
            <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
                <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                    <form onSubmit={handelAdminSubmit} className="w-full">
                        <div className="mb-5 relative">
                            <h1>MAKE ADMIN</h1>
                        </div>
                        <div className="mb-5 relative">
                            <input onBlur={handelOnBlur} type="email" id="email" className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="name@example.com" autocomplete="off" />
                            <label for="email" className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Email address</label>
                        </div>
                        <button type='submit' className="w-full bg-indigo-600 text-white p-3 rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminMake;