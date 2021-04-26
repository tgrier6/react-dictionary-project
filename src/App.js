import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="Wine" />
        </main>
      </div>
      <footer className="text-center">
        <small>
          Coded by <a href="https://linkedin.com/in/tiaragrier2">Tiara Grier</a>{" "}
          open-soucred on <a href="https://github.com/tgrier6">GitHub</a>.
        </small>
      </footer>
    </div>
  );
}

export default App;
