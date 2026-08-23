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
    bio: v.string(), // a little bit about themself, their values, their current skills
    // contact: v.string() // and a little list of emails/phones/comms?
  })
    .index("email", ["email"])
    .index("phone", ["phone"])
    .index("withHandle", ["handle"]),

  ideas: defineTable({
    author: v.id("users"),

    upvotes: v.int64(),
    accepted: v.int64(),

    title: v.string(),
    desc: v.string(),
  })
    .index("author", ["author"]),

  projects: defineTable({
    author: v.id("users"),
  })
    .index("author", ["author"]),

  questions: defineTable({
    author: v.id("users"),

    idea: v.optional(v.id("ideas")),
    project: v.optional(v.id("projects")),

    qcontent: v.string(),
    acontent: v.optional(v.string()),
    public: v.boolean(),
  })
    .index("idea", ["idea"])
    .index("project", ["project"]),

});
