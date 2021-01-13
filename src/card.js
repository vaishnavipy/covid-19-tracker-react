import React from "react"
import infected from "./infected.png"
import recovered from "./recovered.png"
import dead from  "./death.a91d3110.png"
import CountUp from 'react-countup';

function Card({cname,data}){
    const d = new Date()
    
    const days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    let imgSrc = cname === "Recovered" ? recovered : cname === "Infected" ? infected : dead  

    let text =  cname === "Recovered" ? "recoveries from" : cname === "Infected" ? "active cases of" : "deaths caused by" 

    let border= cname === "Recovered" ? "#7FFF95" : cname === "Infected" ? "#FED695" : "#FE8385" 

   /* function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } */
    
    let startCount = data < 100 ? 0 : data - 100 ;

   return(
    
    <div className="card" style={{borderBottom:`0.7em solid ${border}`}}>

        <div className="card-img"><img src={imgSrc} /></div>
        <p className="cname">{cname}</p>
        <h2>
             <CountUp
           
            start={startCount}
            end={data}
            duration={2.75}
            useEasing={true}
            useGrouping={true}
            separator=","
           
            decimal=","
            />
        </h2>
        <p className="dates">{days[d.getDay()]} {months[d.getMonth()]} {d.getDate()} {d.getFullYear()}</p>
        <h5>Number of {text} COVID-19</h5>
        
    </div>)
}

export default Card