import { ArrowLeft, EyeIcon, EyeOff, Leaf, Lock, LogIn, Mail, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import  { useState } from "react";
import logogoogle from "@/assets/logogoogle.jpg"

type propType = {
  previousStep: (s: number) => void;
};

function RegisterForm({ previousStep }: propType) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    px-6 py-10 bg-white relative"
    >
      <div
        className="absolute top-6 left-6 flex items-center gap-2
        text-green-700 hover:text-green-800 transition-colors cursor-pointer"
        onClick={() => previousStep(1)}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </div>

      <motion.h1
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: 10,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-4xl font-extrabold text-green-700 mb-2"
      >
        Create Account
      </motion.h1>
      <p className="text-gray-600 mb-8 flex items-center">
        Join Snapcart today <Leaf className="w-5 h-5 text-green-600" />
      </p>
      <motion.form
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="flex flex-col gap-5 w-full max-w-sm"
      >
        <div className="relative">
          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            type="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
          
            className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {showPassword ? <EyeIcon 
          className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
          onClick={()=>setShowPassword(false)} />
           : <EyeOff
           onClick={()=>setShowPassword(true)}
           className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer" />}
        </div>
        {
           ( ()=>{
            const formValidation= name!=="" && email!=="" && password!==""
                return <button disabled={formValidation}
                 className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 
                    ${
                        formValidation ? 
                        "bg-green-600 hover:bg-green-700 text-white":
                        "bg-gray-300 text-gray-500 cursor-not-allowed"
                 }`}>Register</button>
            })()
        }
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <span className="flex-1 h-px bg-gray-200"></span>
            OR 
            <span className="flex-1 h-px bg-gray-200"></span>
        </div>
<button className="w-full flex items-center justify-center gap-3 border
border-gray-300 hover:bg-gray-50 py-3 rounded-xl text-gray-700 font-medium
transition-all duration-200">
    <Image alt="google logo" src={logogoogle} width={20} height={20} />
    Continue with Google
</button>
      </motion.form>
      <p className="text-gray-600 text-sm flex items-center gap-1 mt-6">Already have an account ?  
        <LogIn className="" /> <span className=""> Sign In</span></p>
    </div>
  );
}

export default RegisterForm;
