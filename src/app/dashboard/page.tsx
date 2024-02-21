import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import LoginForm from "@/components/login/loginform";
import { LogOut } from "lucide-react";
import { LogoutButton } from "@/components/login/logout";
import { Navbar } from "@/components/login/Navbar";

export default async function Home() {
    const session = await getServerSession(authConfig);
    if(session) {
        return <Navbar></Navbar>   
    }
    return (
    <><LoginForm /></>
    );
}