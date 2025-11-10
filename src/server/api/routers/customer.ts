import { publicProcedure, router } from "../trpc"
import { z } from "zod"
import { prisma } from "@/server/db"

export const customerRouter = router({
  getAll: publicProcedure.query(async () => {
    return prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    })
  }),

  add: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(1, { message: "First name is required" }),
        lastName: z.string().min(1, { message: "Last name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        phone: z.string().optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        postalCode: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.customer.create({
        data: input,
      })
    }),
})
