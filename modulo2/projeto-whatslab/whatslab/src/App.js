import React from "react";


import NewMessage from "./components/NewMessage";

class App extends React.Component {
  render() {
    let whatslab = <NewMessage />;

    return (
      <div className="App">
        <div>
          <p> </p>
        </div>
        <form> {whatslab} </form>
        <h3> </h3>
      </div>
    );
  }
}

export default App;