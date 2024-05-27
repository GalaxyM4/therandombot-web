import "../css/Home.css";

import TypingText from "../components/TypingText";
import { randomItem } from "../ts/utils";
import text from "../lang/spanish.json";
import ImagesLocal from "../images";
import AnimatedImage from "../components/AnimatedImage";
import ButtonLocal from "../components/Button";
import Article from "../components/Article";
import TextFont from "../components/Text";

var image_0 = ImagesLocal.getShitpost();
var image_1 = ImagesLocal.getShitpost();
export default function Home() {
  return (
    <div className="Home">
      <section className="Header-Home">     
        <div className="Header-Home">
          <TextFont st="random" type="title">The Random BOT</TextFont>
          <p id="description-header">El bot mas random que te podés imaginar, (actualiza la página)</p>
          <p id="mc-text"><TypingText text={randomItem(text.random.content)} delay={50} /></p>
          <ButtonLocal text="Invitar" reference="https://discord.com/oauth2/authorize?client_id=756533812703395921" blank={true} bt_style="Button-RGB" />
          <p></p>
        </div>
      </section>

      <div className="Generic-Row">
        <AnimatedImage image={image_0.img} alt={image_0.name} animation="random" />
        <AnimatedImage image={image_1.img} alt={image_1.name} animation="random"/>
      </div>

      <Article image={ImagesLocal.getAnimal().img} title="Random Channel"> 
        La función principal del bot es enviar un mensaje random de un usuario también random, pueden salir una amplia variedad de textos y usuarios, si quieres contribuir con los textos o los usuarios puedes ver el github de la página.
      </Article>
    </div>
  )
} 