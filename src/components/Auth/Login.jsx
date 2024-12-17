import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input className ='text-black outline-none bg-transparent placeholder:text-white  border-2 border-emerald-600 py-4 px-5 rounded-full' type="email" placeholder='Enter Your Mail Id' />
                <input className ='text-black outline-none bg-transparent placeholder:text-white  border-2 border-emerald-600 py-4 px-5 rounded-full mt-3' type="password" placeholder='Enter Your Password' />
                <button>Submit</button>


            </form>
        </div>
    </div>
  )
}

export default Login
