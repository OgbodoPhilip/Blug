'use client'

import { CompassIcon, HomeIcon, SparkleIcon, Sparkles, UserIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { motion } from "motion/react"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'



const Logo = () => {
    // Replace with actual authentication logic
   return (
     <Link href="/" className="flex items-center gap-1 group ">
    <motion.div 
     initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 , transition: { delay: 0.1,duration: 0.3}}}
    className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground "/>

    </motion.div>
   

     <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 , transition: { delay: 0.1,duration: 0.3}}}
           
          >
            <span className="text-2xl font-bold tracking-tighter mb-4">Blug<span className="text-primary">.</span></span>
          
          </motion.span>
    </Link>
   )
}

export default function Header() {
     let signIn = true;
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-5xl support-backdrop-filter:bg-background/60">
        <div className="wrapper px-3">
            <div className="flex h-16 items-center justify-between">
                <Logo/>
                <nav className="flex items-center gap-1">
                <Link href='/' className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-2xl text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                <HomeIcon className="size-4"/>
                <span>Home</span>
                </Link>
                <Link href='/explore' className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-2xl text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                <CompassIcon className="size-4"/>
                <span>Explore</span>
                </Link>
              </nav>
                <div className="flex items-center gap-3 ">

                     <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className=" bg-red-400 text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
                 <Button asChild className="rounded-2xl">
                        <Link href='/submit'>
                        <Sparkles className="size-4"/>
                        Submit Project
                        </Link>

                    </Button>
                   
           <UserButton />
            </SignedIn>
                    {/* {signIn ? ( <>
                    <Button asChild className="rounded-2xl">
                        <Link href='/submit'>
                        <Sparkles className="size-4"/>
                        Submit Project
                        </Link>

                    </Button>
                    <Button variant='ghost' className="rounded-full size-8 p-0">
                        <UserIcon className="size-5"/>

                    </Button>
                    </>):(
                        <>
                        
                    <Button variant="outline" className="rounded-2xl">Sign In</Button>
                    <Button  className="rounded-2xl" >Sign Up</Button>
                        </>
                    )}
                    */}





                </div>
                
            </div>
        </div>
    </header>
  )
}