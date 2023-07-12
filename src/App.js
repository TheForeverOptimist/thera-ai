
import AddBoxIcon from "@mui/icons-material/AddBox";
import SendIcon from "@mui/icons-material/Send";
import { Sidebar } from "./components";
import { Cover } from "./components";
import { Chat } from "./components";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Cover />
      <Chat />
    </div>
  );
}

export default App;
