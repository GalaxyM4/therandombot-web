import { randomItem } from '../ts/utils';

interface ImageFormat {
    img: string,
    name: string
}

export default class ImagesLocal {
    static getAnimal(): ImageFormat {
        var images = ["cow.png", "dodo.png", "monkey.png", "orangutan.png", "sheep.png"];
        var choosed = randomItem(images);
    
        return {
            img: require("../images/animals/"+choosed),
            name: choosed
        };
    }

    static getShitpost(): ImageFormat {
        var images = ["baca_0.jpeg", "baca_1.jpeg", "gato_0.png", "gato_1.png", "gato_2.jpeg", "gato_3.jpeg", "gato_4.jpg", "perro_0.jpeg",
        "perro_1.jpeg", "tanque.png", "pez.png", "cursed.jpeg", "cafe.png", "pig.png", "slungus.png", "cuchao.jpeg", 
        "fish.jpeg", "flor.jpeg", "pato.jpeg"];
        var choosed = randomItem(images);
    
        return {
            img: require("../images/shitpost/"+choosed),
            name: choosed
        };
    }
}