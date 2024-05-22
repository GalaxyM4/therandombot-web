import dc_icon from "../images/icons/discord.svg";
import gh_icon from "../images/icons/github.svg";
import yt_icon from "../images/icons/youtube.svg";

export default function FooterHome() {
    return (
        <footer>
            <div className="Generic-Row">
                <div className="Generic-Column">
                    <h5>Apoyo</h5>
                    <a href="https://top.gg/bot/756533812703395921/vote" target="_blank" rel="noopener noreferrer">Top.gg</a>
                    <a href="https://buymeacoffee.com/galaxym4" target="_blank" rel="noopener noreferrer">Buy Me a Coffe</a>
                </div>
                
                <div className="Generic-Column">
                    <h5>Avisos Legales</h5>
                    <a href="/privacy">Términos</a>
                    <a href="/privacy">Privacidad</a>
                </div>
            </div>

            <div id="footer_links">
                <a  href="https://discord.gg/RUzsHEKseq" target="_blank" rel="noopener noreferrer">
                    <img src={dc_icon} alt="Discord Link"/>
                </a>
                <a  href="https://github.com/GalaxyM4/therandombot-web" target="_blank" rel="noopener noreferrer">
                    <img src={gh_icon} alt="Github Link"/>
                </a>
                <a  href="https://youtube.com/channel/UCHzvFcnNAGeVIQxN_u3GzUg" target="_blank" rel="noopener noreferrer">
                    <img src={yt_icon} alt="YouTube Link"/>
                </a>
            </div>
            <p>The Random BOT web by GalaxyM4</p>
        </footer>
    );
}