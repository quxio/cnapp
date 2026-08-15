import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";

import { DataModel } from "./_generated/dataModel";
import { internal } from "./_generated/api";
import { ConvexError } from "convex/values";

const customSignInProviderThing = Password<DataModel>({
   profile (params) {

    const p_email = params.email as string;
    const p_name = params.name as string;
    const p_handle = params.handle as string;

    return {
      email: p_email,

      name: p_name,
      handle: p_handle,
      avatar: "generated avatar",
      bio: "", // left empty
    };
  }
});

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [customSignInProviderThing],
  callbacks:
    {
      async createOrUpdateUser(ctx, a) {
        const f = a.profile;
        const ph : string = f.handle as string;

        const bool = await ctx.runQuery(internal.internalfuncs.HandleCollisionExists, {ph});
        if (bool) { throw new ConvexError("handle collision"); }

        if (a.existingUserId) {
          // push updated fields to the existing user entry
          return a.existingUserId;
        }

        return ctx.db.insert("users", {
          email: f.email as string,
          name: f.name as string,
          handle: f.handle as string,
          avatar: f.avatar as string,
          bio: f.bio as string,
        })
      }
    }
});
