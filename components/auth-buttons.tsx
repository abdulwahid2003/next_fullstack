"use client";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export function AuthButtons() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <div className="flex flex-col items-center gap-4">
        <UserButton />
        <SignOutButton>
          <Button variant="outline">Sign out</Button>
        </SignOutButton>
      </div>
    );
  }

  return (
    <SignInButton mode="modal">
      <Button>Sign in</Button>
    </SignInButton>
  );
}
