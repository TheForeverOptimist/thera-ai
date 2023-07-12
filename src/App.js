import AddBoxIcon from "@mui/icons-material/AddBox";
import SendIcon from "@mui/icons-material/Send";

function App() {
  return (
    <div className="app">
      <section className="side-bar">
        <button>
          <AddBoxIcon />
        </button>
        <ul className="history">
          <li>Previous Entry</li>
        </ul>
        <nav>
          <p>Made by the Team-1</p>
        </nav>
      </section>
      <section className="main">
        <h1>Thera-AI</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit"><SendIcon /></div>
          </div>
          <p className="info">
            Thera-AI is not a substitute for a licensed professional
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
