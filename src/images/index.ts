import { randomItem } from '../ts/utils';

interface ImageFormat {
    img: string,
    name: string
}

export default class ImagesLocal {
    static getAnimal(): ImageFormat {
        var images = 
        [
            'bison.png',   'chicken.png',
            'cow.png',     'dodo.png',
            'giraffe.png', 'goose.png',
            'horse.png',   'llama.png',
            'monkey.png',  'orangutan.png',
            'penguin.png', 'pig.png',
            'rooster.png', 'sheep.png'
        ];
        var choosed = randomItem(images);

        return {
            img: require("./animals/" + choosed),
            name: choosed
        };
    }

    static getShitpost(): ImageFormat {
        var images = 
        [
            'ase frio.jpg',   'baca (2).jpeg', 'baca.jpeg',
            'buuu.jpeg',      'caballo.jpg',   'cafe.png',
            'cocodrilo.jpeg', 'como.jpeg',     'cuchao.jpeg',
            'cursed.jpeg',    'debate.jpeg',   'fish.jpeg',
            'flor.jpeg',      'ganso.jpeg',    'gato (2).jpeg',
            'gato (2).png',   'gato (3).jpeg', 'gato (4).jpeg',
            'gato (5).jpeg',  'gato (6).jpeg', 'gato (7).jpeg',
            'gato (8).jpeg',  'gato.jpeg',     'gato.jpg',
            'gato.png',       'gatroste.png',  'moai.jpeg',
            'monky.jpg',      'oscar.png',     'pato.jpeg',
            'perro (2).jpeg', 'perro.jpeg',    'pez.png',
            'pig.png',        'pollo.jpeg',    'roblox.jpg',
            'slungus.png',    'tanque.png'
        ]
        var choosed = randomItem(images);

        return {
            img: require("./shitpost/" + choosed),
            name: choosed
        };
    }
}
