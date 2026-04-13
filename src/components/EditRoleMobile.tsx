'use client'
import axios from 'axios'
import { ArrowRight, Bike, User, UserCog } from 'lucide-react'
import {motion} from 'motion/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const EditRoleMobile = () => {
  const [roles,setRole] = useState([
    {id:'admin', label:"Admin", icon:UserCog },
    {id:'user', label:"User", icon:User },
    {id:'deliveryBoy', label:"Delivery Boy", icon: Bike}
  ])
  const [selectedRole, setSelectedRole] = useState("")
  const [mobile, setMobile] = useState("")
  const handleEdit= async ()=>{
    try {
      const result = await axios.post("/api/user/edit-role-mobile",{
        role: selectedRole,
        mobile
      })
      redirect('/')
    } catch (error) {
     console.log(error) 
    }
  }
  return (
    <div className='flex flex-col min-h-screen p-6 w-full bg-green-50 items-center'>
   <motion.h1
    initial={{ opacity: 0 , y:10}}
    animate={{ opacity: 1 ,y:0}}
    transition={{ duration: 0.6 }}
  
    className='text-3xl md:text-4xl front-extrabold text-green-700 
    text-center mt-0 font-extrabold'
   >
    Select Your Role
   </motion.h1>

   <div className='flex flex-col items-center justify-center gap-6 md:flex-row mt-10'>
    {roles.map((role)=>{
      const Icon = role.icon
      const isSelected = selectedRole ==role.id
      return(
        <motion.div
        key={role.id}
        whileTap={{scale: 0.95}}
        onClick={()=>setSelectedRole(role.id)}
        className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 transition-all duration-300
          ${isSelected?"border-green-600 bg-green-100 shadow-lg"
            :"border-gray-300 bg-white hover:border-green-400"
          }`}
        >
          <Icon />
         <span>
          {role.label}
         </span>
        </motion.div>
      )
})}
 
   </div>

<motion.div
initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay:0.5 }}
    className='flex flex-col items-center mt-10'
    >
   <label htmlFor='mobile' className='text-center  mb-2 text-gray-700 font-semibold'>Enter Your Mobile No.</label>
    <input 
    type='tel'
    placeholder='eg. 0000000000'
    onChange={(e)=>setMobile(e.target.value)}
    id='mobile' className='border-2w-64md:w-80 px-4 py-3 rounded-xl border
     border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800' />
     </motion.div>
     
     <motion.button 
     initial={{ opacity: 0 , y:20}}
    animate={{ opacity: 1 ,y:0}}
    transition={{ delay: 0.7 }}
    disabled={mobile.length !==10 || !selectedRole }
     className={`inline-flex mt-10 items-center gap-2 font-semibold py-3 px-8 
     rounded-2xl shadow-md transition-all duration-200 ${
      selectedRole && mobile.length === 10 ? "bg-green-600 hover:bg-green-700 text-white"
      :"bg-gray-300 text-gray-500 cursor-not-allowed"
     }`}
     onClick={handleEdit}
     >
      Go to Home <ArrowRight />
     </motion.button>
    </div>
  )
}

export default EditRoleMobile
