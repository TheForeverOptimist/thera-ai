import './sidebar.css'
import { Previous } from '.'
import AddBoxIcon from "@mui/icons-material/AddBox";
import React from "react";

function Sidebar() {
  return (
    <>
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

      {/* <Previous /> */}
      <div >sidebar</div>
    </>
  );
}

export default Sidebar