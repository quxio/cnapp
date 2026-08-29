import { query, QueryCtx } from "./_generated/server";
import { Id } from "./_generated/dataModel";
// import { v } from "convex/values";

async function nameOfUser(ctx: QueryCtx, userId: Id<"users">) {
  const data = await ctx.db.get("users", userId);
  return data?.name ?? "";
}
const queryIdeas = query({
  args: {},
  handler: async (ctx) => {
    const raw = await ctx.db.query("ideas").collect();
    const final = [];
    for (const obj of raw) {
      const nobj = {...obj, author: await nameOfUser(ctx, obj.author)};
      final.push(nobj);
    }
    return final;
  },
})
// const mutateIdeas = mutation({
//   args: {
//     title: v.string(),
//     desc: v.string(),
//     longdesc: v.string(),
//   }
// })




export { queryIdeas };
