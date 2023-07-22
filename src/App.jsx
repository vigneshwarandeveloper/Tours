import {useEffect, useState} from "react";
import { Loading } from "./Loading";
import {Tours} from "./Tours";


const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setLoading]=useState(true)
  const [tours,settours]=useState([])

  const fetchdata=async()=>{
    setLoading(true)
   try{
    const response=await fetch(url);
    const data=await response.json();
    settours(data)
   }catch(err){
    console.log('error', err)
   }
   setLoading(false)
  }

  useEffect(()=>{
    fetchdata()
  },[])

  if(isLoading){
    return <main>
      <Loading  />
    </main>
  }

  const removetours=(id)=>{
    const newtours=tours.filter((tour)=>{
      return tour.id!==id;
    })
    settours(newtours)
  }
  

  if(tours.length===0){
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button onClick={()=>fetchdata()} style={{marginTop:"2rem"}} className="btn">Reset</button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removetours={removetours}/> 
  
  </main>;
};
export default App;
