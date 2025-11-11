'use client'

import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function TopBar() {
  const { data: session, status } = useSession()
  const isAuthenticated = status === "authenticated"

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 border-b bg-background sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Button variant="ghost" className="px-3">
          <h1 className="text-lg font-semibold tracking-tight">OrderTrak</h1>
        </Button>
      </Link>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <Link href="/dashboard">
              <Button variant="default">Dashboard</Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => signOut()}
              className="hover:bg-destructive hover:text-destructive-foreground transition"
            >
              Logout
            </Button>
          </>
        ) : (
          <Link href="/login">
            <Button variant="default">Login</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </header>
  )
}
