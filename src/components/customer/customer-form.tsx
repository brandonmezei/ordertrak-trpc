'use client'

import { useState } from "react"
import { trpc } from "@/utils/trpc"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function CustomerForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  })

  const utils = trpc.useUtils()
  const addCustomer = trpc.customer.add.useMutation({
    onSuccess: () => {
      toast.success("Customer added successfully!")
      utils.customer.getAll.invalidate()
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
      })
    },
    onError: (err) => {
      toast.error("Failed to save customer", {
        description: err.message,
      })
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addCustomer.mutate(form)
  }

  return (
    <main className="flex justify-center mt-12 px-4">
      <Card className="w-full max-w-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Add Customer</CardTitle>
          <CardDescription>
            Enter the customer’s contact and address details below.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="address">Street Address</Label>
              <Textarea
                id="address"
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main Street"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="New York"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="state">State / Province</Label>
                <Input
                  id="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="NY"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="10001"
                />
              </div>
            </div>

            <CardFooter className="flex justify-end px-0">
              <Button type="submit" disabled={addCustomer.isPending}>
                {addCustomer.isPending ? "Saving..." : "Save Customer"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
