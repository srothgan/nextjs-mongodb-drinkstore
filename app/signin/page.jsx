import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import  {authOptions }from "../api/auth/[...nextauth]/route";
import LoginForm from '@/components/loginform';

export default async function Anmelden() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");

    return(
        <main>
            <LoginForm/>
        </main>
    )
  }
  