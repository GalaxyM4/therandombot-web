import "../css/Home.css";

import TypingText from "../components/TypingText";
import { randomItem } from "../ts/utils";
import text from "../lang/spanish.json";
import ImagesLocal from "../images";
import AnimatedImage from "../components/AnimatedImage";
import ButtonLocal from "../components/Button";


export default function Home() {
  var image_0 = ImagesLocal.getShitpost();
  var image_1 = ImagesLocal.getShitpost();
  return (
    <div className="Home">
      <section className="Header-Home">     
        <div className="Header-Home">
          <h2>The Random BOT</h2>
          <p id="description-header">Lo mas random que te podés imaginar, (actualiza la página)</p>
          <p id="mc-text"><TypingText text={randomItem(text.random.content)} delay={50} /></p>
          <ButtonLocal text="Invitar" reference="https://discord.com/oauth2/authorize?client_id=756533812703395921" blank={true} bt_style="Button-RGB" />
          <p></p>
        </div>
      </section>

      <div className="Generic-Row">
        <AnimatedImage image={image_0.img} alt={image_0.name} animation="random" />
        <AnimatedImage image={image_1.img} alt={image_1.name} animation="random"/>
      </div>
    </div>
  )
} 