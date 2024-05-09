import cow from '../images/animals/cow.png';
import dodo from '../images/animals/dodo.png';
import monkey from '../images/animals/monkey.png';
import orangutan from "../images/animals/orangutan.png";
import sheep from "../images/animals/sheep.png";

import cafe from "../images/shitpost/cafe.png";
import gato from "../images/shitpost/gato.png";
import slungus from "../images/shitpost/slungus.png";

export default class ImagesLocal {
    static getAnimalArray() {
        return [cow, dodo, monkey, orangutan, sheep];
    }

    static getShitpostArray() {
        return [cafe, gato, slungus];
    }
}