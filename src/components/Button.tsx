type StyleButton = "Button-Code" | "Button-Border" | "Button-RGB" | "default" | "random";

export default function ButtonLocal({text, reference, blank, bt_style}: {text: string, reference: string, blank: boolean, bt_style: StyleButton}) {
    return (
        <a href={reference} target={(blank) ? "_blank" : "_self"} rel="noreferrer">
            <button className={bt_style}>{text}</button>
        </a>
    )
}