import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-332%20Books%20from_large.jpg?itok=goIsOQs0"
            className="App-logo"
            alt="logo"
          />
        </header>
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
