import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "../../layouts/Navbar"
import { Dashboard } from "../../layouts/DashBoard";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Container className="main">
          <Dashboard />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;