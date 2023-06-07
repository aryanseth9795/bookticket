import Typed from "react-typed";
import '../styles/movies.css'
import DisplayItems from './DisplayItems.js'
// import Typed from "react-typed";
import { React ,useState,useEffect } from 'react';

import { Routes, Route } from "react-router-dom";
export default function Movies() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchApidata("https://api.tvmaze.com/search/shows?q=all");
  },[users]);

  const fetchApidata = async (url) => {
    try {
      const res = await fetch(
        url,
        { mode: "cors" },
        { method: "GET", headers: { accept: "application/json" } }
      );
      const data = await res.json();
    //   console.log(data);
      setUsers(data);
    //   console.log("uses", users)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        {!users ? (
          <div className='loader'>
   <div id="containerload"><svg id="pageloader">
           <circle cx="75" cy="75" r="20" />
           <circle cx="75" cy="75" r="35" />
           <circle cx="75" cy="75" r="50" />
           <circle cx="75" cy="75" r="65" />
       </svg></div>
       <h3 className='lname'>Loading........</h3></div>
      ) : (
        <div> <div className="he"><h1 className="main-title">FUNFLIX</h1> <div>
        <h1  id="run">
            <Typed
              strings={[
                "BORED",
                " GUEST !",
                " ENTERTAINMENT",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h1>
        </div></div>
        <div className='projectList'>
            {users.map((project, idx) => {
          return (
            <div className='disbox'>
            <DisplayItems id={idx} name={project.show.name} image={project.show.image.medium} rate={project.show.rating.average} />
            </div>
          );
        })}


        </div>
        </div>
      )
    }

    </div>
  )
}
