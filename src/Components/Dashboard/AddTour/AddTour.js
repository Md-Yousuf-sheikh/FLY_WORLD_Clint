import React, { useRef, useState } from 'react';
const AddTour = () => {
    const [added, setAdded] = useState(false);
    // const [image, setImage] = useState(null)
    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const infoRef = useRef();
    const peopleRef = useRef();
    const nightRef = useRef();
    const dayRef = useRef();
    const loctionRef = useRef();

    // console.log(image);
    const handelSubmit = (e) => {
        e.preventDefault();
        // if (!image) {
        //     return
        // }
        const name = nameRef.current.value;
        const image = imgRef.current.value;
        const price = priceRef.current.value;
        const info = infoRef.current.value;
        const people = peopleRef.current.value;
        const night = nightRef.current.value;
        const day = dayRef.current.value;
        const loction = loctionRef.current.value;
        const newUser = {
            name: name,
            price: price,
            info: info,
            people: people,
            image: image,
            night: night,
            day: day,
            loction: loction
        }
        fetch('https://vast-cove-03076.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAdded(true)
                    e.target.reset()
                } else {
                    setAdded(false)
                }
            })


    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
                    <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                        <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD TOUR POST</h1>
                        <div className="space-y-4">
                            {
                                added && <div
                                    className="bg-green-200 px-2 py-4  my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                                        ></path>
                                    </svg>
                                    <span className="text-green-800"> Added New Event Successfully! </span>
                                </div>
                            }
                            <div>
                                <label for="name" className="text-lx font-serif font-semibold">Name</label>
                                <input required type="name" ref={nameRef} placeholder="Name" id="name" className="w-full outline-none py-3 px-2 text-md border-2 rounded-md" />
                            </div>
                            <div>
                                <label for="Location" className="text-lx font-serif font-semibold">Location</label>
                                <input required type="Location" ref={loctionRef} placeholder="Location" id="name" className="w-full outline-none py-3 px-2 text-md border-2 rounded-md" />
                            </div>


                            <div>
                                <label for="description" className="block mb-2 text-lg font-serif">Description:</label>
                                <textarea required id="description" ref={infoRef} cols="20" rows="4" placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                            </div>
                            {/*  */}
                            <div className=''>
                                <div className='grid grid-cols-2 gap-6'>
                                    <div className="">
                                        <label for="name" className="text-lx font-serif font-semibold">Day</label><br />
                                        <select ref={dayRef} className="text-2xl w-full font-bold rounded border-2  text-gray-600  pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                    </div>
                                    {/*  */}
                                    <div className="">
                                        <label for="name" className="text-lx font-serif font-semibold">Night</label><br />
                                        <select ref={nightRef} className="text-2xl w-full font-bold rounded border-2  text-gray-600  pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label for="name" className="text-lx font-serif font-semibold">People</label><br />
                                        <select ref={peopleRef} className="text-2xl w-full font-bold rounded border-2  text-gray-600  pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="price" className="text-lx font-serif font-semibold">Price</label> <br />
                                        <input required ref={priceRef} type="number" placeholder="price" id="price" className=" text-lg font-bold w-full text-gray-600 outline-none py-1 px-2 text-md border-2 rounded" />
                                    </div>
                                </div>
                                <div>
                                    <label for="img" className="text-lx font-serif font-semibold">Img Link</label> <br />
                                    <input required ref={imgRef} type="text" placeholder="img" id="img" className=" font-thin font-bold w-full text-gray-600 outline-none py-1 px-2 text-md border-2 rounded" />
                                </div>
                                {/* <div className="grid grid-cols-1 mt-5 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                                    <div className='flex items-center justify-center w-full disabled:opacity-75'>
                                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                                            <div className='flex flex-col items-center justify-center pt-7'>
                                                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                                            </div>
                                            <input onChange={e => setImage(e.target.files[0])} type='file' className="hidden disabled:opacity-75 " />
                                        </label>
                                    </div>
                                </div> */}
                            </div>
                            <button type='submit' className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">Add Event</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTour;