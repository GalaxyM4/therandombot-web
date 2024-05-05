import cow from '../images/animals/cow.png';
import dodo from '../images/animals/dodo.png';
import monkey from '../images/animals/monkey.png';
import orangutan from "../images/animals/orangutan.png";
import sheep from "../images/animals/sheep.png";
import { randomItem } from '../ts/utils';

export default function Chamba() {
  var animals = [monkey, cow, dodo, orangutan, sheep];
  return (
    <div className="Chamba-Div">
      <img src={randomItem(animals)} className="Img-Animal" alt="animal" />
      <p>Chambiado pe</p>
    </div>
  )
}