'use client'

import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function TopBar() {
  const { data: session, status } = useSession()
  const isAuthenticated = status === "authenticated"

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 border-b bg-background">
      <h1 className="text-lg font-semibold">Order Trak</h1>

      <div className="flex gap-2 items-center">
        {isAuthenticated ? (
          <>
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Button variant="ghost" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </header>
  )
}
