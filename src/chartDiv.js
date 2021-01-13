import React, { Fragment, useEffect, useState } from "react"
import Chart from "chart.js"


function ChartDiv({confirmed,recovered,deaths,country}) {

   

   
   const [d,setD] = useState("")

    const [barChart,setBarChart] = useState("")

    const [options,setOptions] = useState("") 

 

    useEffect(()=>{
        console.log("mount")
        setD({
            labels: ["Infected","Recovered","Deaths"],
            datasets: [{
           label: "People",
            backgroundColor: ["rgba(252,219,141,0.7)","rgba(125,252,147,0.7)","rgba(251,131,133,0.7)"],
            borderColor: "none",
            borderWidth: 2,
            
            data: [0,0,0],
            }]
        })

        setOptions({
            maintainAspectRatio: false,
            
            title: {
                display: true,
                text: `The current state in ${country}`
            }, 
            legend: {
                display: false},
            scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                display: true,
                
                }
            }],
            xAxes: [{
                gridLines: {
                display: false
                }
            }]
            }
        })

        

       
            


    },[])

    useEffect(()=>{
        console.log("d & option chnage")

        if(d && options){

        setBarChart(Chart.Bar(`chart`, {
            options: options,
            data: d
        }))
    }
        
    },[d,options]) 



   

   

    useEffect(()=>{
      

        if(barChart && confirmed){
            console.log("update barchart")

        barChart.options.title.text =  `The current state in ${country}`
        barChart.data.datasets[0].data[0] = confirmed; // Would update the first dataset's value of 'March' to be 50
        barChart.data.datasets[0].data[1] = recovered; 
        barChart.data.datasets[0].data[2] = deaths; 
        barChart.update()
        }


    },[confirmed,recovered,deaths,barChart])

    

  
      


    return( 
        <div className="chart-container">
        <canvas id="chart"></canvas>
        </div>
        )
   
}

export default ChartDiv