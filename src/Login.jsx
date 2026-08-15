import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { NavLink, useNavigate } from "react-router";
import { ConvexError } from "convex/values";


export default function Login() {

  const navi = useNavigate();
  const auth = useAuthActions();
  let [up, setUp] = useState(false);

  return (
    <>
      <div className="LOGINOUTERCONTAINER">
        <div className="LOGININNERCONTAINER">
          <button onClick={()=>setUp(!up)}>{up ? "Signing UP rn" : "Signing IN rn"}</button>
          <form onSubmit={(e)=>{
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            fd.set("flow", up ? "signUp" : "signIn");
            try {
              auth.signIn("password", fd);
            } catch (e) {
              if (error instanceof ConvexError) {
                alert(`Got some kinda error:\n${e.message}`);
              } else {
                alert("Something really unexpected happened that the site couldn't handle. Unfortunately. Sorry. Umm.. Try again... later???");
              }
              return;
            }
            navi("/");
          }}>

            <label htmlFor="email">email</label>
            <input name="email" type="email" />

            <label htmlFor="password">password</label>
            <input name="password" type="password" />

            <>
              {up ? <>
                <label htmlFor="name">name</label>
                <input name="name" type="text" />

                <label htmlFor="handle">handle</label>
                <input name="handle" type="text" />
              </> : <></>}
            </>

            {/*<input name="flow" value={up ? "signUp" : "signIn"} type="hidden" />*/}

            <button type="submit">submit</button>

          </form>
          <NavLink to="/">Back</NavLink>
        </div>
      </div>
    </>
  )
}