import { auth } from "@/auth";
import EditRoleMobile from "@/components/EditRoleMobile";
import connectDb from "@/lib/db";
import { redirect } from "next/navigation";
import User from "@/models/user.model";
import Nav from "@/components/Nav";


async function Home() {
 await connectDb()
 const session = await auth()
 const user = await User.findById(session?.user?.id)
 if(!user){
  redirect("/login")
 }
 const inComplete = !user.mobile || !user.role || (!user.mobile && user.role)
 if(inComplete){
  return <EditRoleMobile />
 }
  const plainUser = JSON.parse(JSON.stringify(user))
 return(
  <>
<Nav user={plainUser}/>
  </>
 )
 
}

export default Home;
