import Banner from "./components/Banner";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="banner">
        <Banner />
      </div>
      <GameBoard />
    </div>
  );
}

export default App;
