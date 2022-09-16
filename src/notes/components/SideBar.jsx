import { Box, Divider, Drawer, List, Toolbar, Typography, IconButton} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { onCloseDrawer } from "../../store/ui/uiSlice";
import { ArrowBack } from "@mui/icons-material";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
    const dispatch = useDispatch( );
    
    const { auth , note , ui  } = useSelector(state => state);
    
    const { displayName } = auth;
    const { notes } = note;
    const { drawer } = ui ;

    return (
            <Box
                component="nav"
                sx={{ width: { sm: drawer.width }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="persistent"
                    open={drawer.isOpen}
                    sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawer.width },
                    }}
                >
                    <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>
                    <IconButton onClick={()=> dispatch(onCloseDrawer())} >
                        <ArrowBack />
                    </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>
                        {notes.map((note) => (
                            <SideBarItem key={note.id} note={note} />
                        ))}
                    </List>
                </Drawer>
            </Box>
        );
};
