import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { NavLink, useNavigate } from "react-router";
import { Authenticated, Unauthenticated } from "convex/react";
import { ConvexError } from "convex/values"

export default function Login() {

  const navi = useNavigate();
  const auth = useAuthActions();
  let [up, setUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      <div className="LOGINOUTERCONTAINER">
        <div className="LOGININNERCONTAINER">
          <button onClick={() => setUp(!up)}>
            {up ? "Signing UP rn" : "Signing IN rn"}
          </button>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              fd.set("flow", up ? "signUp" : "signIn");
              try {
                await auth.signIn("password", fd);
                navi("/");
              } catch (e) {
                if (e instanceof ConvexError) {
                  setErrorMsg(`convexerror:\n${e.message}`);
                }
              }
            }}
          >
            {errorMsg && <div style={{color: "coral"}}>{errorMsg}</div>}

            <label htmlFor="email">email</label>
            <input name="email" type="email" />

            <label htmlFor="password">password</label>
            <input name="password" type="password" />

            <>
              {up ? (
                <>
                  <label htmlFor="name">name</label>
                  <input name="name" type="text" />

                  <label htmlFor="handle">handle</label>
                  <input name="handle" type="text" />
                </>
              ) : (
                <></>
              )}
            </>

            {/*<input name="flow" value={up ? "signUp" : "signIn"} type="hidden" />*/}

            <button type="submit">submit</button>

            <Authenticated>
              <div style={{ backgroundColor: "cornflowerblue" }}>
                AUTHENTICATED
              </div>
            </Authenticated>
            <Unauthenticated>
              <div style={{ backgroundColor: "lightgreen" }}>
                UNAUTHENTICATED
              </div>
            </Unauthenticated>
            <button onClick={auth.signOut}>log out</button>
          </form>
          <NavLink to="/">Back</NavLink>
        </div>
      </div>
    </>
  );
}