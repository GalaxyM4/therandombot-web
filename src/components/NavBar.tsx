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
    const pages_r: Map<string, {ref: string, blank: boolean}> = new Map();
    pages_r.set("Inicio 🦄", {
        ref:  "/home",
        blank: false
    });
    pages_r.set("Comandos 🤓", {
        ref:  "/chamba",
        blank: false
    });
    pages_r.set("Soporte 🐒⚒️", {
        ref:  "https://discord.gg/RUzsHEKseq",
        blank: true
    });

    return (
        <AppBar position="static" sx={{background: ""}}>
            <Box className="BoxButtons">
            {
                Array.from(pages_r.keys()).map((page) => {
                    var page_map = pages_r.get(page)!;
                    if(page_map.blank) {
                        return(
                            <Button key={page} className="NavButton" sx={NavButtonStyle} href={page_map.ref} target="_blank">
                                {page}
                            </Button>
                        )
                    }else {
                        return(
                            <Button key={page} className="NavButton" sx={NavButtonStyle} href={page_map.ref} >
                                {page}
                            </Button>
                        )
                    }
                })
            }
          </Box>
        </AppBar>
    )
}