import "../css/Home.css";

import { Button } from "@mui/material";
import TypingText from "../components/TypingText";
import { randomItem } from "../ts/utils";
import text from "../lang/spanish.json";
import ImagesLocal from "../images";

export default function Home() {
  return (
    <div className="Home">
      <section className="Header-Home">
        <div id="row-header">
          <img src={randomItem(ImagesLocal.getShitpostArray())} alt="shitpost"/>
          <div className="Header-Home">
            <h2>The Random BOT</h2>
            <p id="mc-text"><TypingText text={randomItem(text.random.content)} delay={50} /></p>
            <Button href="https://discord.com/oauth2/authorize?client_id=756533812703395921" target="_blank">Invitame</Button>
          </div>
          <img src={randomItem(ImagesLocal.getShitpostArray())} alt="shitpost"/>
        </div>
        
      </section>
    </div>
  )
} 