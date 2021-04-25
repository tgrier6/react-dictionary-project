import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2018/03/dictionary.jpg"
            className="App-logo"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary />
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
