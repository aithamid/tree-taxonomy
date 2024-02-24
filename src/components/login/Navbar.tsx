import { Card } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";
import { LogoutButton } from "./logout";
import { getAuthSession, getRequiredAuthSession } from "@/db/auth";

export const Navbar = async () => {
  const session = await getRequiredAuthSession();
  return (
    <nav className="bg-slate-200 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <h1 className="E-mail ml-2 font-semibold">Erena</h1>
        </div>
        <div>
          <div className="flex items-center">
            <span className="E-mail ml-2 mr-2">{session.user?.email}</span>
            <span className="ml-2 mr-2">{session.user?.id}</span>
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
