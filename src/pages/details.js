import {React,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
// import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/detail.css";
function Details() {
    const [users, setUsers] = useState({});
    useEffect(() => {
      fetchApidata("https://api.tvmaze.com/search/shows?q=all");
    },[]);
  
    const fetchApidata = async (url) => {
      try {
        const res = await fetch(
          url,
          { mode: "cors" },
          { method: "GET", headers: { accept: "application/json" } }
        );
        const data = await res.json();
        // console.log(data[id]);
        // const newdat=data[{id}]
        // console.log(newdat)
        setUsers(data);
        console.log( users)
      } catch (error) {
        console.log(error);
      }
    };
  const { id } = useParams();
  const pro = users[id]
//  const user= data[id]
  console.log(pro)

  return (
    <div className="project">
        {!pro?(
          <p>no data </p>
        ):( 
        
        <div className="detail">
          <img className="im" src={pro.show.image.medium}/>
          <h2>NAME: {pro.show.name}</h2>
          <h4>ABOUT: {pro.show.summary}</h4>
          <h2>LANGUAGE: {pro.show.language}</h2>
          <h2>PREMIERED ON: {pro.show.premiered}</h2>
          <h2>RATING: {pro.show.rating.average}</h2>
          <h2>SEHEDULE DATE: {pro.show.schedule.date}</h2>
          <h2>SEHEDULE TIME: {pro.show.schedule.time}</h2>
<button className="but" style={{width:"15%"}}>BOOK NOW !</button>
          </div>
        )}
    </div>
  );
}

export default Details;
