import axios from 'axios';
import React ,{useEffect} from 'react'

const Login = () => {

  useEffect(() => {
 
    async function fetchData() {
        // You can await here
        const res = await axios.post("http://localhost:22551/ChatApp-war/ChatServlet?message=",);
        if(res){
            
            console.log(res.data);
        }
        // ...
      }
      fetchData();
  
  }, [])
  
    return (
        < >

            <div className="h-screen flex justify-center items-center w-screen overflow-hidden relative">
                <div className="absolute w-60 h-60 rounded-xl bg-white -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                </div>
                <div className="absolute w-48 h-48 rounded-xl bg-white -bottom-6 -right-10 transform rotate-12 hidden md:block">
                </div>
                <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-gray-700">Log to your Account</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Welcome to our Chat App !</p>
                    </div>
                    <div className="space-y-4">
                        <input type="text" placeholder="Email Address" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                        <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                      
                    </div>
                    <div className="text-center mt-6">
                        <button type='submit' className="py-3 w-64 text-xl text-white bg-gray-400 hover:bg-gray-700 rounded-2xl">Log In</button>
                        <p className="mt-4 text-sm">You don't have Have An Account? <a href='/register' className="underline font-bold cursor-pointer">Sign Up</a>
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

export default Login