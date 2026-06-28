"use server";

import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";

type SyncUserInput = {
  name?: string | null;
  email?: string | null;
  imageUrl?: string | null;
};

export async function syncUser(input: SyncUserInput) {
  if (!input.email) {
    return { ok: false as const, error: "Missing email" };
  }

  const existing = await db
    .select()
    .from(Users)
    .where(eq(Users.email, input.email));

  if (existing[0]) {
    return { ok: true as const, isNew: false, user: existing[0] };
  }

  const [created] = await db
    .insert(Users)
    .values({
      name: input.name ?? "Unknown",
      email: input.email,
      imageUrl: input.imageUrl ?? null,
    })
    .returning();

  return { ok: true as const, isNew: true, user: created };
}
