import { Footer } from "@/components/footer";
import { HomeNavButtons } from "@/components/home/navbuttons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-8 text-center transition-colors">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Welcome to <span className="text-primary">OrderTrak</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your all-in-one inventory and order tracking application — built to
          help you stay organized, efficient, and in control. Manage your
          customers, orders, and stock levels seamlessly from one powerful
          dashboard.
        </p>

        <HomeNavButtons />
      </div>
      <Footer />
    </div>
  );
}
