import { internalQuery } from "./_generated/server";
import { v } from "convex/values";

const HandleCollisionExists = internalQuery({
  args: { p_handle: v.string() },
  handler: async (ctx, args) => {
    const data = await ctx.db.query("users")
      .withIndex("withHandle", (v)=>v.eq("handle", args.p_handle)).collect();
    return data?.length > 0;
  }
})

export { HandleCollisionExists };