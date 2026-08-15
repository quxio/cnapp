import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,

  users: defineTable({
    email: v.string(),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),

    name: v.string(),
    avatar: v.string(),
    handle: v.string(),
    bio: v.string(),

  })
    .index("email", ["email"])
    .index("phone", ["phone"])
    .index("handle", ["handle"])
});
