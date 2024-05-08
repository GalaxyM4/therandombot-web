import "../css/Home.css";

import { Button } from "@mui/material";
import TypingText from "../components/TypingText";
import { randomItem } from "../ts/utils";
import text from "../lang/spanish.json";

export default function Home() {
  return (
    <div className="Home">
      <section className="Header-Home">
        <div id="row-header">
          <div className="Header-Home">
            <h2>The Random BOT</h2>
            <p id="mc-text"><TypingText text={randomItem(text.random.content)} delay={50} /></p>
            <Button>hola</Button>
          </div>
        </div>
        
      </section>
    </div>
  )
} 