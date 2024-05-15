import { ReactNode } from "react";
import { randomItem } from "../ts/utils";

var fonts = {
    "Sedan SC": {
        fontFamily: `"Sedan SC", serif`
    },
    "Permanent Marker": {
        fontFamily: `"Permanent Marker", cursive`
    },
    "Jacquard 12": {
        fontFamily: `"Jacquard 12", system-ui`
    },
    "Dancing Script": {
        fontFamily: `"Dancing Script", cursive`
    },
    "Caveat": {
        fontFamily: `"Caveat", cursive`
    },
    "Bebas Neue": {
        fontFamily: `"Bebas Neue", sans-serif`
    },
    "Astloch": {
        fontFamily: `"Astloch", system-ui`
    },
    "Aguafina Script": {
        fontFamily: `"Aguafina Script", cursive`
    },
    "Aboreto": {
        fontFamily: `"Aboreto", system-ui`
    },
    'GlukMixer': {
        fontFamily: `'GlukMixer', sans-serif`
    },
    'Sonsie One': {
        fontFamily: `'Sonsie One', sans-serif`
    },
    'Excalibur Logotype': {
        fontFamily: `'Excalibur Logotype', sans-serif`
    },
    'Glix': {
        fontFamily: `'Glix', sans-serif`
    },
    'House On Mars': {
        fontFamily: `'House On Mars', sans-serif`
    },
    'Were-Beast': {
        fontFamily: `'Were-Beast', sans-serif`
    },
    'Assassin Nation': {
        fontFamily: `'Assassin Nation', sans-serif`
    },
    'Blokhed': {
        fontFamily: `'Blokhed', sans-serif`
    },
    'discontinuo tfb': {
        fontFamily: `'discontinuo tfb', sans-serif`
    },
    'White On Black': {
        fontFamily: `'White On Black', sans-serif`
    },
    'Foreshadow BRK': {
        fontFamily: `'Foreshadow BRK', sans-serif`
    },
    'Runelike': {
        fontFamily: `'Runelike', sans-serif`
    },
    'Grunge Manifesto': {
        fontFamily: `'Grunge Manifesto', sans-serif`
    },
    'Dalek': {
        fontFamily: `'Dalek', sans-serif`
    },
    'LCD-7': {
        fontFamily: `'LCD-7', sans-serif`
    },
    'SF Groove Machine': {
        fontFamily: `'SF Groove Machine', sans-serif`
    },
    'Minecrafter Alt': {
        fontFamily: `'Minecrafter Alt', sans-serif`
    },
    'Roblox Logo Original': {
        fontFamily: `'Roblox Logo Original', sans-serif`
    },
    'Confessions': {
        fontFamily: `'Confessions', sans-serif`
    },
    'Led Panel Station Off': {
        fontFamily: `'Led Panel Station Off', sans-serif`
    },
    'Gradation': {
        fontFamily: `'Gradation', sans-serif`
    },
    'Homoarakhn': {
        fontFamily: `'Homoarakhn', sans-serif`
    },
    'BreezedCaps': {
        fontFamily: `'BreezedCaps', sans-serif`
    },
    'Red Screen Eye': {
        fontFamily: `'Red Screen Eye', sans-serif`
    },
    'CarbonType': {
        fontFamily: `'CarbonType', sans-serif`
    }
}

export default function TextFont({type, st, children}: {type: "title" | "txt", st: keyof typeof fonts | "random", children: ReactNode}) {
    var style;

    if(st === "random") {
        var possible = randomItem(Object.keys(fonts));
        var choosed =  Object.create(fonts)[possible];
        style = choosed;
    }else {
        style = fonts[st];
    }

    if(type === "txt") {
        return <p style={style}>{children}</p>
    }else {
        return <h1 style={style}>{children}</h1>
    }
    
}