import "../css/Animations.css";
import { randomItem } from "../ts/utils";

type AnimationImage = "Image-FlipY" | "Image-FlipX" | "Rotate-IMG" | "Maxwell-Anim" | "random";

export default function AnimatedImage({image, animation, alt}: {image: string, animation: AnimationImage, alt: string}) {
    if(animation === "random") {
        var possible: AnimationImage[] = ["Image-FlipX", "Image-FlipY", "Rotate-IMG", "Maxwell-Anim"];
        animation = randomItem(possible);
    }
    return <img src={image} className={animation} alt={alt} />;
}