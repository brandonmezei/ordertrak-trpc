import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { LoginForm } from "@/components/login/login-form"
import {Footer} from "@/components/footer";

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-8 text-center transition-colors">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm /> 
      </div>
      <Footer />
    </div>
  )
}
