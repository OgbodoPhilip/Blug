import { CompassIcon, HomeIcon, SparkleIcon, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"



const Logo = () => {
   return (
     <Link href="/" className="flex items-center gap-1 group ">
    <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground "/>

    </div>
    <span className="text-xl font-bold">
        <span className="text-primary">B</span>l
        <span className="text-primary">u</span>g
    </span>
    </Link>
   )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-5xl support-backdrop-filter:bg-background/60">
        <div className="wrapper px-4">
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
                <div className="flex items-center gap-3 ">
                    <Button asChild className="rounded-2xl">
                        <Link href='/submit'>
                        <Sparkles className="size-4"/>
                        Submit Project
                        </Link>

                    </Button>

                    <Button variant="ghost">Sign In</Button>
                    <Button  >Sign Up</Button>




                </div>
                </nav>
            </div>
        </div>
    </header>
  )
}