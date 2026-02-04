'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Home, Compass, Sparkles, Sparkle, Menu, X, LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'

import { cn } from '@/lib/utils'

// Types
interface NavItem {
  href: string
  label: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/explore', label: 'Explore', icon: Compass },
]

const logoVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] }
  }
}

const mobileMenuVariants: Variants = {
  closed: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: "easeInOut" }
  }
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-100"
      aria-label="Blug home"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
        className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"
      >
        <Sparkle className="size-5" />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-2xl font-bold tracking-tight"
      >
        Blug<span className="text-primary">.</span>
      </motion.span>
    </Link>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium",
                    "text-muted-foreground transition-colors",
                    "hover:bg-muted/70 hover:text-foreground",
                    "active:bg-muted/90"
                  )}
                >
                  <Icon className="size-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Auth + Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-xl px-4 text-sm font-medium"
                  >
                    Sign in
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button
                    size="sm"
                    className="rounded-xl bg-primary hover:bg-primary/90 px-5 text-sm font-medium shadow-sm"
                  >
                    Sign up
                  </Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="rounded-xl gap-2 shadow-sm"
                >
                  <Link href="/submitproject">
                    <Sparkles className="size-4" />
                    <span>Submit Project</span>
                  </Link>
                </Button>

                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "size-9 border-2 border-background shadow-sm",
                    }
                  }}
                />
              </SignedIn>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden border-t"
            >
              <div className="flex flex-col py-4 px-2 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium",
                        "text-muted-foreground transition-colors",
                        "hover:bg-muted/70 hover:text-foreground active:bg-muted/90"
                      )}
                    >
                      <Icon className="size-5" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}

                <div className="pt-4 mt-2 border-t">
                  <SignedOut>
                    <div className="flex flex-col gap-3 px-4">
                      <SignInButton mode="modal">
                        <Button
                          variant="outline"
                          className="w-full rounded-xl justify-center"
                          onClick={closeMobileMenu}
                        >
                          Sign in
                        </Button>
                      </SignInButton>

                      <SignUpButton mode="modal">
                        <Button
                          className="w-full rounded-xl justify-center"
                          onClick={closeMobileMenu}
                        >
                          Sign up
                        </Button>
                      </SignUpButton>
                    </div>
                  </SignedOut>

                  <SignedIn>
                    <div className="flex flex-col gap-4 px-4">
                      <Button
                        asChild
                        variant="default"
                        className="rounded-xl gap-2 justify-center"
                        onClick={closeMobileMenu}
                      >
                        <Link href="/submitproject">
                          <Sparkles className="size-4" />
                          Submit Project
                        </Link>
                      </Button>

                      <div className="flex items-center justify-center gap-3 py-2">
                        <UserButton
                          appearance={{
                            elements: {
                              avatarBox: "size-10",
                              userPreviewMainIdentifier: "text-base",
                            }
                          }}
                        />
                      </div>
                    </div>
                  </SignedIn>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}