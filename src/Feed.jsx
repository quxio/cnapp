import { useState } from "react";
import { Authenticated, Unauthenticated } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Link } from "react-router";
import logobanner from "./logobanner01.png";
import profiletemp from "./profiletemp01.png";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import Markdown from "react-markdown";

function SearchBar() {
  return (
    <div className="SEARCHBAR">
        <input placeholder="Type"/>
        <input placeholder="Tag"/>
        <input placeholder="Keyword"/>
    </div>
  )
}

function Navbar() {
  const auth = useAuthActions();
  let [EP, setEP] = useState(false);

  return (
    <div className="NAVBAR NAVBARSPACER">
      <img alt="banner" src={logobanner} className="LLLL"/>
      {/*<button>search</button>*/}
      {/*<button>idea</button>*/}
      {/*<button>project</button>*/}
      <SearchBar/>

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
                <Link to={"mkpost"}>+</Link>
                <Link to={"account"}>Account</Link>
                <Link to={"account"}>Your Posts</Link>
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


function Card({index, indexfunc, title, desc, author, upvotes, fork_prev, fork_total}) {
  return (
  <div className="FEEDCARD" onClick={()=>indexfunc(index)}>
    <div className="FCIMAGEBOX">
      <div className="FCIMAGE"></div>
      <div className="FCTEMP"></div>
      <div className="FCTEMP"></div>
      <div className="FCTEMP"></div>
    </div>
    <div className="FCTEXTBOX">
      {/*<div className="FCTITLE">Lorem Ipsum Dolor sdfj sdf oisjdof sjdf sdifo </div>*/}
      {/*<div className="">a 9 1 5</div>*/}
      {/*<div className="FCTOOLS">A X F P</div>*/}
      <div className="FCTITLE">{title}</div>
      <div className="">by {author}</div>
      <div className="">{desc}</div>
      <div className="">upvotes: {upvotes}</div>
      <div className="">fork_prev: {fork_prev}, fork_total: {fork_total}</div>
    </div>
  </div>
)}

function Cardmodal({projects, index, indexfunc}) {
  let data;
  if (index !== null) { data = projects[index]; }
  return (<div className={index === null ? "CARDMODALSHARED CARDMODALHIDDEN" : "CARDMODALSHARED CARDMODAL"} onKeyDown={() => indexfunc(null)}  onClick={() => indexfunc(null)}>
    <div className="CMINNER" onClick={(e)=>e.stopPropagation()}>
      { index === null ? <></> : <>
        <h1>{data.title}</h1>
        <h2>{data.desc}</h2>
        <p>by {data.author}</p>
        <p>body:</p>
        <hr />
        <Markdown>{data.writeup}</Markdown>
      </>}
    </div>
  </div>)
}

export default function Feed() {
  const projects = useQuery(api.clientfuncs.fetchProjects);
  const [cardindex, setCardindex] = useState(null);

  return (
    <div>
      <Navbar/>
      <Navbarspacer/>

      <Cardmodal projects={projects} index={cardindex} indexfunc={setCardindex}/>

      <div className="FEEDBOXOUTER">
        <div className="FEEDBOX">
          {projects?.map((i, index)=> <Card key={i._id} index={index} indexfunc={setCardindex} title={i.title} desc={i.desc} author={i.author} upvotes={i.upvotes} fork_prev={i.fork_prev} fork_total={i.fork_total} /> )}
        </div>
      </div>
    </div>
  )
}
