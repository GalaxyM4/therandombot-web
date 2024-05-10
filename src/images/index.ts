import { randomItem } from '../ts/utils';

export default class ImagesLocal {
    static getAnimal() {
        var array: string[] = [];
        var images = ["cow.png", "dodo.png", "monkey.png", "orangutan.png", "sheep.png"];
        images.forEach(elm => {
            array.push(require("../images/animals/"+elm));
        })
        return randomItem(array);
    }

    static getShitpost() {
        var array: string[] = [];
        var images = ["baca_0.jpeg", "baca_1.jpeg", "gato_0.png", "gato_1.png", "gato_2.jpeg", "gato_3.jpeg", "gato_4.jpg", "perro_0.jpeg", "perro_1.jpeg", "slungus.png", "tanque.png", "pez.png", "cursed.jpeg", "cafe.png", "pig.png", "slungus.png", "cuchao.jpeg", "fish.jpeg", "flor.jpeg", "pato.jpeg"];
        images.forEach(elm => {
            array.push(require("../images/shitpost/"+elm));
        })
        return randomItem(array);
    }
}