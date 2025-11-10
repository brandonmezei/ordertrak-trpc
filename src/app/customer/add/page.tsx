import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { CustomerForm } from '@/components/customer/customer-form'


export default async function AddCustomerPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')

  return <CustomerForm />
}