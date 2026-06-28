"use client";

import { useUser } from "@clerk/nextjs";
import { syncUser } from "@/app/actions/user";
import { useEffect } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const { user } = useUser();

  useEffect(() => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    syncUser({
      name: user.fullName,
      email: user.primaryEmailAddress.emailAddress,
      imageUrl: user.imageUrl,
    })
      .then((result) => {
        console.log("db result", result);
      })
      .catch((error) => {
        console.error("db error", error);
      });
  }, [user]);

  return <>{children}</>;
}
