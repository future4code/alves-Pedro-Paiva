import React from "react";
import LoginPage from "./pages/LoginPage";
import { Router } from "./routes/Router";
import styled from "styled-components";

const Cookenu = styled.div`
margin: 0;
padding: 0;`

function App() {
  return (
    <Cookenu> 
      <Router/>
    </Cookenu>
  );
}

export default App;
