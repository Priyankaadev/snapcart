import { auth } from "@/auth";
import EditRoleMobile from "@/components/EditRoleMobile";
import connectDb from "@/lib/db";
import { redirect } from "next/navigation";
import User from "@/models/user.model";
import Nav from "@/components/Nav";
import UserDashboard from "@/components/UserDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import DeliveryBoyDashboard from "@/components/DeliveryBoyDashboard";


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
{user.role =="user"?(
  <UserDashboard />
): user.role == "admin" ? (
  <AdminDashboard />
): <DeliveryBoyDashboard />
}
  </>
 )
 
}

export default Home;
