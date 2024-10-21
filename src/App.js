import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Important from "./components/important/Important";
import Newnav from "./components/navbar/Newnav";

function App() {
  return (
    <div className="App">
      <Newnav />
      {/* <Important />
      <Header />
      <Hero /> */}
    </div>
  );
}

export default App;
