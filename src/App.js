
import './App.css';
import logo from "./logo.png"
import Card from "./card"
import { useEffect,useState } from 'react';
import Country from "./country"
import ChartDiv from "./chartDiv"



function App() {
  const [covidData,setCovidData] = useState("")

  const [country,setCountry] = useState("")



  useEffect(()=>{

    fetch("https://covid19.mathdro.id/api")
    .then(response => response.json())
    .then(data => setCovidData(data) )

    
  },[])

  
  function  selectCountry(data){

    setCountry(data)

  }

  useEffect(()=>{
    if(country){
      if(country === "global"){
        fetch("https://covid19.mathdro.id/api")
        .then(response => response.json())
        .then(data => { setCovidData(data)})
    
      }else{

    fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    .then(response => response.json())
    .then(data => setCovidData(data) )
      }
    }
  },[country])

 

  return (
      
    <div className="app-container">
      <div className="logo"><img src={logo}/></div>
      <p>Data source from <span className="api"><a href="https://github.com/mathdroid/covid-19-api" target="_blank">mathdroid's</a></span> api</p>
      
      <div className="card-grid" >

      {covidData &&  <Card cname="Infected" data={covidData.confirmed.value} /> }
      {covidData && <Card cname="Recovered" data={covidData.recovered.value} /> }
      {covidData && <Card cname="Deaths" data={covidData.deaths.value} /> }
      
      </div>

      {covidData && <Country selectCountry={selectCountry}/> }

      {covidData && country && <ChartDiv confirmed={covidData.confirmed.value} recovered={covidData.recovered.value} deaths={covidData.deaths.value} country={country}/> }

    </div>
  );
}

export default App;
