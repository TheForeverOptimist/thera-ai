import AddBoxIcon from "@mui/icons-material/AddBox";
import SendIcon from "@mui/icons-material/Send";
import {Sidebar} from "./components/sidebar";
import { Cover } from "./components/cover";
import { Chat } from "./components/chat";

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
