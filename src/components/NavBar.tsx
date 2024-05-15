export default function NavBar() {
    const pages_r: Map<string, {ref: string, blank: boolean}> = new Map();
    pages_r.set("Soporte", {
        ref:  "https://discord.gg/RUzsHEKseq",
        blank: true
    });
    pages_r.set("Comandos", {
        ref:  "/chamba",
        blank: false
    });
    pages_r.set("Inicio", {
        ref:  "/home",
        blank: false
    });

    return (
        <ul className="Nav-Row">
            <li>
                <div id="txt">:D</div>
            </li>
            
            {Array.from(pages_r.keys()).map(e => (
                    <li key={e}>
                        <a href={pages_r.get(e)!.ref}>{e}</a>
                    </li>
                )
            )}
        </ul>
    )
}