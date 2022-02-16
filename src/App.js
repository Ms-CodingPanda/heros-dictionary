import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input className="App-logo" type="checkbox" />
      </header>
      <main>
        <Dictionary defaultKeyword="Adventure" />
      </main>
      <footer className="App-footer">Coded by Vanessa Fadase</footer>
    </div>
  );
}

export default App;
