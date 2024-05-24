import { randomItem } from '../ts/utils';

interface ImageFormat {
    img: string,
    name: string
}

export default class ImagesLocal {
    static getAnimal(): ImageFormat {
        var images = ["bison.png", "chicken.png", "cow.png", "dodo.png", "giraffe.png", "goose.png", "horse.png", "llama.png", "monkey.png", "orangutan.png", "penguin.png", "pig.png", "rooster.png", "sheep.png"];
        var choosed = randomItem(images);
    
        return {
            img: require("./animals/"+choosed),
            name: choosed
        };
    }

    static getShitpost(): ImageFormat {
        var images = ["baca_0.jpeg", "baca_1.jpeg", "buuu.jpeg", "como.jpeg", "cuchao.jpeg", "cursed.jpeg", "fish.jpeg", "flor.jpeg", "ganso.jpeg", "gato_2.jpeg", "gato_3.jpeg", "gato_5.jpeg", "gato_6.jpeg", "gato_7.jpeg", "moai.jpeg", "pato.jpeg", "perro_0.jpeg", "perro_1.jpeg", "pollo.jpeg", "caballo.jpg", "gato_4.jpg", "roblox.jpg", "cafe.png", "gato_0.png", "gato_1.png", "oscar.png", "pez.png", "pig.png", "slungus.png", "tanque.png"];
        var choosed = randomItem(images);
    
        return {
            img: require("./shitpost/"+choosed),
            name: choosed
        };
    }
}