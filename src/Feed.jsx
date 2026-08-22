import { useState } from "react";
import { Authenticated, Unauthenticated } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Link } from "react-router";
import logobanner from "./logobanner01.png";
import profiletemp from "./profiletemp01.png";

function Navbar() {
  const auth = useAuthActions();
  let [EP, setEP] = useState(false);

  return (
    <div className="NAVBAR NAVBARSPACER">
      <img alt="banner" src={logobanner} className="LLLL"/>
      <button>search</button>

      <div style={{flexGrow: 1}}></div>
      <Authenticated>
        <div className="PROFILE" onClick={()=>setEP(true)} onMouseLeave={()=>setEP(false)}>
          <img className="PROFILEIMG" alt="profile" src={profiletemp} />
          <div className="PROFILETEXT">Your Name</div>
          {EP ?
            <div className="PROFILEPOP">
              <div className="NNPROFILE">
                <div className="PROFILEIMGPL">
                  <img className="PROFILEIMGAGAIN" alt="profile" src={profiletemp}/>
                </div>
                <div className="PROFILETEXT">Your Name extends more</div>
              </div>
              <div className="PROFILEGRID">
                <div>+</div>
                <div>Account</div>
                <div>Preferences</div>
                <div onClick={auth.signOut}>Log out</div>
              </div>
            </div>
            : <></>}
        </div>
      </Authenticated>
      <Unauthenticated>
        <Link to="login" className="LOGINBTN">log in</Link>
      </Unauthenticated>

    </div>
  )
}

function Navbarspacer() { return <div className="NAVBARSPACER"></div> }


export default function Feed() {
  return (
    <>
      <Navbar/>
      <Navbarspacer/>
      <div className="FEEDBOXOUTER">
        <div className="FEEDBOX">
          <div className="FEEDCARD">
            <div className="FCIMAGEBOX">
              <div className="FCIMAGE"></div>
              <div className="FCTEMP"></div>
              <div className="FCTEMP"></div>
              <div className="FCTEMP"></div>
            </div>
            <div className="FCTEXTBOX">
              <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
              <div className="FCBADGES">a 9 1 5</div>
              <div className="FCTOOLS">A X F P</div>
            </div>
          </div>
          <div className="FEEDCARD">
            <div className="FCIMAGEBOX">
              <div className="FCIMAGE"></div>
              <div className="FCTEMP"></div>
              <div className="FCTEMP"></div>
              <div className="FCTEMP"></div>
            </div>
            <div className="FCTEXTBOX">
              <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
              <div className="FCBADGES">a 9 1 5</div>
              <div className="FCTOOLS">A X F P</div>
            </div>
          </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div><div className="FEEDCARD">
          <div className="FCIMAGEBOX">
            <div className="FCIMAGE"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
            <div className="FCTEMP"></div>
          </div>
          <div className="FCTEXTBOX">
            <div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>
            <div className="FCBADGES">a 9 1 5</div>
            <div className="FCTOOLS">A X F P</div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
