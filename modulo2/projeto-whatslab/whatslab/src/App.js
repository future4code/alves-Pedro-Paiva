import React from 'react';
import Newmessage from "./components/Newmessage";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> WHATS LAB </h1>
        <div>{Newmessage}</div>
    
    </div>
    )
  }
}

export default App;
