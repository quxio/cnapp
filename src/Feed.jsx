import { NavLink } from "react-router";


function Navbar() {
  return (
    <div className="NAVBAR NAVBARSPACER">
      this is the navbar
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
      <NavLink to="login">Login</NavLink>
    </>
  )
}
