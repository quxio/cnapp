import { Authenticated, Unauthenticated } from "convex/react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="NAVBAR NAVBARSPACER">
      <div className="LOGOFONT">idea4project</div>


      <div style={{flexGrow: 1}}></div>
      <Authenticated>
        <div>ur profile</div>
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
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <div>This person has a really long bio.<br/>It spans multiple lines.<br/>Nobody will read this.</div>
      <Link to="login">Login</Link>
    </>
  )
}
