import { router } from "./trpc";
import { userRouter } from "./routers/user";
import { customerRouter } from "./routers/customer";

export const appRouter = router({
  user: userRouter,
  customer: customerRouter,
});

export type AppRouter = typeof appRouter;
