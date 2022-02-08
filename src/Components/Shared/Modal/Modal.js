import React from 'react';

const Modal = ({ setConform, setOpenModal, item, url }) => {
    const { _id } = item;
    const handelDelete = e => {
        fetch(`https://vast-cove-03076.herokuapp.com/${url}${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 1) {
                        setConform(true)
                    }
                }))
    }
    return (
        <>
            <div onClick={() => setOpenModal(false)} className="min-w-screen h-screen bg-black/60  backdrop-blur-md backdrop-filter   fixed  left-0 top-0 flex justify-center items-center inset-0 z-50" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-center text-red-500 mb-4">
                            <svg className="icon icon-tabler icon-tabler-circle-check" width={56} height={56} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">Conform Delete Processing</h1>
                        <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">Are you sure you want to <span className='text-red-400'>Delete</span> your product now? </p>
                        <div className="flex items-center justify-center w-full">
                            <button onClick={handelDelete} className="focus:outline-none transition duration-150 ease-in-out bg-red-500 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">Conform</button>
                            <button onClick={() => setOpenModal(false)} className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"  >
                                Cancel
                            </button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"  >
                            <svg onClick={() => setOpenModal(false)} aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;