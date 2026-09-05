import { internalQuery } from "./_generated/server";
import { v } from "convex/values";

const HandleCollisionExists = internalQuery({
  args: { ph: v.string() },
  handler: async (ctx, {ph}) => {
    const data = await ctx.db.query("users")
      .withIndex("handle", (v)=>v.eq("handle", ph)).collect();
    return data?.length > 0;
  }
})

export { HandleCollisionExists };