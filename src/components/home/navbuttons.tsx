"use client";
import { useSession } from "next-auth/react";

export function HomeNavButtons() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/changelog"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition"
      >
        View Changelog
      </a>

      {isAuthenticated ? (
        <a
          href="/dashboard"
          className="px-6 py-3 border border-border rounded-xl font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition"
        >
          Go to Dashboard
        </a>
      ) : (
        <a
          href="/login"
          className="px-6 py-3 border border-border rounded-xl font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition"
        >
          Sign In
        </a>
      )}
    </div>
  );
}
