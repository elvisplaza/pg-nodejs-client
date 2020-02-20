import React, {useEffect} from 'react';
import './App.css';

import * as apiCall from "./helpers/apiCalls"

function App() {
 
  const onGetEventHourly = async () =>{
    const hourly = await apiCall.onGetEvent({rate:"hourly"})
    console.log(hourly, "hourly")
  }
  useEffect(()=>{
    onGetEventHourly()
  },[])
  return (
    <div className="App">
      Hello, world
    </div>
  );
}

export default App;
