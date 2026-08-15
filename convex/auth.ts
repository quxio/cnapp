import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";

import { DataModel } from "./_generated/dataModel";
import { internal } from "./_generated/api";
import { ConvexError } from "convex/values"

const customSignInProviderThing = Password<DataModel>({
   /* async */ profile (params, ctx) {
    const f = params.flow as string;

    const p_email = params.email as string;
    const p_name = params.name as string;
    const p_handle = params.handle as string;

    if (f === "signUp") {
    //   const col = await ctx.runQuery(internal.userfuncs.HandleCollisionExists, { p_handle: p_handle, });
    //   if (col) {throw new ConvexError("Handle already exists");}
    }

    // return new Promise<{ email: string, name: string, handle: string, avatar: string, bio: string, }>(
    //   (resolve) => resolve({email: p_email, name: p_name, handle: p_handle, avatar: "generated avatar", bio: ""})
    // )

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
});
