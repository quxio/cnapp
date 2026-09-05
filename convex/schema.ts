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
    // contact: v.string() // field for emails/phones/comms?
  })
    .index("email", ["email"])
    .index("phone", ["phone"])
    .index("handle", ["handle"])
  ,

  ideas: defineTable({
    author: v.id("users"),

    upvotes: v.int64(),

    numwips: v.int64(),
    numfins: v.int64(),

    title: v.string(),
    desc: v.string(),
    longdesc: v.string(),
  })
    .index("author", ["author"])
  ,

  tags: defineTable({
    val: v.string(),
  }),

  projecttags: defineTable({
    project: v.id("projects"),
    tag: v.id("tags"),
  })
    .index("project", ["project"])
    .index("tag", ["tag"])
  ,

  projects: defineTable({
    author: v.id("users"),
    ptr: v.nullable(v.id("projects")),
    upvote_num: v.int64(),
    fork_prev: v.int64(),
    fork_total: v.int64(),
    status: v.int64(),

    title: v.string(),
    desc: v.string(),
    writeup: v.string(),
  })
    .index("author", ["author"])
    .index("ptr", ["ptr"])
    .index("status", ["status"])
  ,

});
