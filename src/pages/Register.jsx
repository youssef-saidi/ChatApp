import React from 'react'

const Register = () => {
  return (
    < >

    <div className="h-screen flex justify-center items-center w-screen overflow-hidden relative">
        <div className="absolute w-60 h-60 rounded-xl bg-white -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div className="absolute w-48 h-48 rounded-xl bg-white -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <form className="pb-5 pt-7  px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-gray-700">Create An Account</h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Welcome to our Chat App !</p>
            </div>
            <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input type="text" placeholder="Email Address" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                <input type="text" placeholder="Repeat Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                {/* <div className="rounded-md border border-gray-100 p-4 shadow-md "> */}
                    <label for="upload" className="flex flex-col rounded-md border border-gray-100 p-3 mx-16 shadow-md  items-center gap-2 cursor-pointer" style={{background:"white"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-gray-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-600 font-medium">Upload Image</span>
                    </label>
                    <input id="upload" type="file" className="hidden" />
                {/* </div> */}
            </div>
            <div className="text-center mt-6">
                <button type='submit' className="py-3 w-64 text-xl text-white bg-gray-400 hover:bg-gray-700 rounded-2xl">Create Account</button>
                <p className="mt-4 text-sm">Already Have An Account? <a href='/login' className="underline font-bold cursor-pointer">Sign In</a>
                </p>
            </div>
        </form>
        <div className="w-40 h-40 absolute bg-white rounded-full top-0 right-12 hidden md:block"></div>
        <div
            className="w-20 h-40 absolute bg-white rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
    </div>
</>
  )
}

export default Register