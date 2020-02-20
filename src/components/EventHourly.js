import React, { useState, useEffect, useMemo } from "react";
import { Chart } from 'react-charts'

// helpers
import * as apiCalls from "./../helpers/apiCalls";

const EventHourly = (props) =>{
 const [ hourlyStats, setHourlyStats ] = useState([])

  const onGetEventHourly = async () =>{
    const hourly = await apiCalls.onGetEvent({rate:"hourly"})
    return setHourlyStats(hourly)
  }


//   ============= useEffect ==================
useEffect(()=>{
    onGetEventHourly()
}, [])
return(
    <section>
        {hourlyStats.map(stat=>{
           return  <div>
              <p> date: {stat.date}</p>
              <p> hour: {stat.hour}</p>
              <p>events: {stat.events}</p>
            </div>;
        })}
    </section>
)

}

export default EventHourly