import React, { useEffect, useState } from "react"

function Country({selectCountry}){

    const [countryInput,setCountryInput] = useState("global")

    const [countryArr,setCountryArr] = useState("");

    const [countryList,setCountryList]  = useState("")

    useEffect(()=>{
        fetch("https://covid19.mathdro.id/api/countries")
        .then(response=> response.json())
        .then(data =>  setCountryArr(data.countries))
    },[])

   
    function handleChange(event){
        setCountryInput(event.target.value)
        selectCountry(event.target.value)
    }

    useEffect(()=>{
        if(countryArr){

          setCountryList( countryArr.map((elm,i) =>  <option value={elm.name} key={i}>{elm.name}</option> ) )
            

        }
    },[countryArr])

    return(
    <div className="select">
        <form>
         <select value={countryInput}  onChange={handleChange}>
         <option value="global" >Global</option>
            {countryList}

        </select>
        </form>
    </div>)
}
export default Country