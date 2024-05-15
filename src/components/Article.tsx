import { ReactNode } from "react";
import "../css/Article.css";
import TextFont from "./Text";

export default function Article({title, image, children}: {title: string, image: string, children: ReactNode}) {
    return (
        <div className="Article-BOT">
            <div>
                <TextFont type="title" st="LCD-7">{title}</TextFont>
                <p>{children}</p>
            </div>
        
            <img src={image} alt={`img:${title}`}/>
            
        </div>
    )
}