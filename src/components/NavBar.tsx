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
    const pages = ["Inicio 👻", "Comandos 🤓", "Soporte 🐒⚒️"];
    return (
        <AppBar position="static" sx={{background: ""}}>
            <Box className="BoxButtons">
            {
                pages.map((page) => (
                <Button key={page} className="NavButton" sx={NavButtonStyle}>
                    {page}
                </Button>
                ))
            }
          </Box>
        </AppBar>
    )
}