import { AppBar, Box, Button, SxProps } from "@mui/material";   
import "../css/Nav.css";

const NavButtonStyle: SxProps = {
    my: 1.5,
    mx: 1.5,
    color: "white",
    display: "flex",
    ":hover": {
        color: "#b0b0b0",
    }
}

export default function NavBar() {
    const pages_r: Map<string, string> = new Map();
    pages_r.set("Inicio 🦄", "/home");
    pages_r.set("Comandos 🤓", "/chamba");
    pages_r.set("Soporte 🐒⚒️", "/chamba");

    return (
        <AppBar position="static" sx={{background: ""}}>
            <Box className="BoxButtons">
            {
                Array.from(pages_r.keys()).map((page) => (
                    <Button key={page} className="NavButton" sx={NavButtonStyle} href={pages_r.get(page)!} >
                        {page}
                    </Button>
                ))
            }
          </Box>
        </AppBar>
    )
}