import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../app/slices/logSlice';

const Navbar = () => {
    const [apparence, setapparence] = useState(false);
    const dispatch = useDispatch()

 
    return (
        <div className='sticky top-0 w-screen h-16 flex flex-row items-center place-content-between bg-white shadow-3xl z-40'>
            <div className='flex flex-row justify-center items-center p-4'>
                <h1 className='text-white font-cookie font-semibold text-xl px-4' style={{color:"#1c1e21"}}>App Name</h1>
            </div>
            <div className='relative z-40'>
                <img onClick={()=>{setapparence(!apparence)}} className='active:scale-90 hover:opacity-90 cursor-pointer w-12 h-12 mr-4 rounded-full border border-2' src="/images/noImage.jpg" alt="" srcSet="" />
                {apparence&&
                <div className='rounded	absolute w-48 z-40 top-12 right-4 shadow-2xl border border-white divide-y-2 bg-gradient'>
                    <div className='flex flex-row items-center p-2 '>
                        <img className='cursor-pointer w-12 h-12 mr-4 rounded-full border border-2' src="/images/noImage.jpg" alt="" srcSet="" />
                        <h2 className='text-md font-semibold'>Youssef Saidi</h2>
                    </div>
                    <h3 onClick={()=>dispatch(logOut())} className='bg-gradient text-md font-semibold flex justify-end mt-2 py-2 px-4  hover:text-red-600 cursor-pointer'>Log out</h3>
                </div>}
            </div>
        </div>
    );
}

export default Navbar;