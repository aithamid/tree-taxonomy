"use client";

import Link from "next/link"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/ModeToggle"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {


  return (
    
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 border-b px-8 py-4", className)}
      {...props}
    >
        <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/logo.png"
              width={30}
              height={30}
              alt="Picture of the author"
              className="mr-5"
            />

              Erena
        </div>
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <ModeToggle />
    </nav>
  )
}
