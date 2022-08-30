import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";
import SchoolIcon from "@mui/icons-material/School";

const drawerWidth = 240;

export default function Drawer1() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          alignItems: "center",
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      <img
        src="logo.png"
        alt="logo"
        width="40%"
        border-radius="50%"
        padding-left="50px"
        sx={{ mx: "auto", width: 200 }}
      />

      <h1>Au Tutor</h1>

      <Divider />
      <List>
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={() => setcomponent("teaching")}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Teaching" />
        </ListItemButton>
        <ListItemButton onClick={() => setcomponent("requested")}>
          <ListItemIcon>
            <ApprovalIcon />
          </ListItemIcon>
          <ListItemText primary="Requested" />
        </ListItemButton>

        <ListItemButton onClick={() => setcomponent("sessions")}>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Sessions" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  );
}
