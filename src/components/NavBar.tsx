import { AppBar, Box, Button, SxProps } from "@mui/material";   
import "../css/Nav.css";
import { NavigateFunction } from "react-router-dom";

const NavButtonStyle: SxProps = {
    my: 1.5,
    mx: 1.5,
    color: "white",
    display: "flex",
    ":hover": {
        color: "#b0b0b0",
    }
}

export default function NavBar({navHook}: {navHook: NavigateFunction}) {
    const pages_r: Map<string, string> = new Map();
    pages_r.set("Inicio 🦄", "/therandombot-web/home");
    pages_r.set("Comandos 🤓", "/therandombot-web/chamba");
    pages_r.set("Soporte 🐒⚒️", "/therandombot-web/chamba");

    return (
        <AppBar position="static" sx={{background: ""}}>
            <Box className="BoxButtons">
            {
                Array.from(pages_r.keys()).map((page) => (
                <Button key={page} className="NavButton" sx={NavButtonStyle} onClick={async () => {navHook(pages_r.get(page)!)}}>
                    {page}
                </Button>
                ))
            }
          </Box>
        </AppBar>
    )
}