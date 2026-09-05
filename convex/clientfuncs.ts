import { query, QueryCtx } from "./_generated/server";
import { Id } from "./_generated/dataModel";
// import { v } from "convex/values";

async function nameOfUser(ctx: QueryCtx, userId: Id<"users">) {
  const data = await ctx.db.get("users", userId);
  return data?.name ?? "";
}

const fetchProjects = query({
  args: {
    // author: v.nullable(v.id("author")),
    // tags: v.array(v.id(""))
  },
  handler: async (ctx) => {
    const rawData = await ctx.db.query("projects").collect();
    const withAuthorNames = [];
    for (const obj of rawData) {
      const nobj = {...obj, author: await nameOfUser(ctx, obj.author)};
      withAuthorNames.push(nobj);
    }
    return withAuthorNames;
  }
})

// const mutateIdeas = mutation({
//   args: {
//     title: v.string(),
//     desc: v.string(),
//     longdesc: v.string(),
//   }
//
// })




export { fetchProjects };
