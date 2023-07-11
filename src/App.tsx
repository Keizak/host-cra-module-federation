import React from 'react';
import './App.css';
import {IncubatorLabsModule} from "./module-federation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Host CRA-APP
        </p>
        <IncubatorLabsModule title={"Remote-Cra"}/>
      </header>
    </div>
  );
}

export default App;
