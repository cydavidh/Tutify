import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Navigate, useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApprovalIcon from "@mui/icons-material/Approval";
import SchoolIcon from "@mui/icons-material/School";

import Requested from "./Tabs/Requested";
import Students from "./Tabs/Students";
import Teaching from "./Tabs/Teaching";

const drawerWidth = 240;

export default function Tutorpage() {
  const theme = useTheme();
  const navigate = useNavigate();
  // const [open, setOpen] = React.useState(true);
  const [component, setcomponent] = useState("");

  // useEffect(() => {
  //   setcomponent(component);
  // }, [component]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

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

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        {component == "" ? (
          <Teaching />
        ) : component == "requested" ? (
          <Requested />
        ) : component == "teaching" ? (
          <Teaching />
        ) : (
          <Students />
        )}
      </Box>
    </Box>
  );
}
