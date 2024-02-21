import { Card } from "@/components/ui/card"
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]"
import { LogoutButton } from "./logout";

export const Navbar = async () => {
    const session = await getServerSession(authConfig);
    return (
        <nav className="bg-slate-200 p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <h1 className="E-mail ml-2 font-semibold">Erena</h1>
                </div>
                <div>
                    {session ? (
                        <div className="flex items-center">
                            <span className="E-mail ml-2 mr-2">{session.user?.email}</span>
                            <LogoutButton />
                        </div>
                    ) : (
                        <a href="/api/auth/signin" className="E-mail">Sign in</a>
                    )}
                </div>
                
            </div>
        </nav>
    )
}