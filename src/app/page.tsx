import { auth } from "@/auth";
import connectDb from "@/lib/db";
import User from "@/models/user.model";


async function Home() {
 await connectDb()
 const session = await auth()
 const user = await User.findById(session?.user?.id)
 if(!user){
  redirect("/login")
 }
 const inComplete = !user.mobile || !user.role || 
  return (
 <div>

 </div>
  );
}
