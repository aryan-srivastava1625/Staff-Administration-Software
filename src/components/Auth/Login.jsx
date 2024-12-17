import React from 'react'

const Login = () => {

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("form submitted")
    }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
            <input required className ='outline-none bg-transparent placeholder:text-grey-500 border-2 border-emerald-600 py-4 px-5 rounded-full' type="email" placeholder='Enter Your Mail Id' />
                <input required className =' outline-none bg-transparent placeholder:text-grey-500  border-2 border-emerald-600 py-4 px-5 rounded-full mt-4' type="password" placeholder='Enter Your Password' />
                
                <button className ='text-white mt-6 outline-none placeholder:text-white border-none   bg-emerald-600 py-4 px-5 rounded-full mt-3'>Submit</button>


            </form>
        </div>
    </div>
  )
}

export default Login
