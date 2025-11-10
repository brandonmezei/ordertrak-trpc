import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { prisma } from "@/server/db";

export const userRouter = router({
  getAll: publicProcedure.query(() => prisma.user.findMany()),
  add: publicProcedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(({ input }) => prisma.user.create({ data: input })),
});
