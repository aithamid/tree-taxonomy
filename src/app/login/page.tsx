"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PasswordInput } from "./passwordinput";
import { useState } from "react"

// import { UserAuthForm } from "./components/user-auth-form"

export default function AuthenticationPage() {
    const [currentPassword, setCurrentPassword] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirmation, setPasswordConfirmation] = useState("")

    return (
      <>
        <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex lg:col-span-2 dark:border-r">
            <div className="absolute inset-0 bg-zinc-900" />
            <Image
              src="/cover.png" // Replace with your image path
              alt="Background"
              layout="fill"
              objectFit="cover" // or 'contain' based on your needs
              quality={100}
            />
            <div className="relative z-20 flex items-center text-lg font-medium">
              Erena - Taxonomy
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">&ldquo;Build your ODD Descriptor&rdquo;</p>
                <footer className="text-sm">
                  Erena Laboratory - Université Gustave Eiffel
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8 lg:col-span-3">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Sign in with your token
                </h1>
                <PasswordInput
					id="current_password"
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					autoComplete="current-password"
				/>
                <Button>Sign in</Button>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
