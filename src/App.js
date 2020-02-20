import React, {useEffect} from 'react';
import './App.css';

// components
import EventHourly from "./components/EventHourly";

// helpers
import * as apiCall from "./helpers/apiCalls"

function App() {
  return (
    <div className="App">
     <EventHourly />
    </div>
  );
}

export default App;
