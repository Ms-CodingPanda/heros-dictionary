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
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="https://vanessa-fadase.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vanessa Fadase
        </a>{" "}
        Open-Sourced on{" "}
        <a
          href="https://github.com/Ms-CodingPanda/heros-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
