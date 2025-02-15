import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import navbarData from "../../datafiles/NavbarData";
import styles from "./Navbar.module.css"; 

function Navbar() {
  return (
    <AppBar position="sticky" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        {/* Left Section - Search Icon */}
        <Box className={styles.leftSection}>
          {navbarData
            .filter((item) => item.name === "search")
            .map((item, index) => (
              <IconButton key={index} color="inherit">
                {item.icon}
              </IconButton>
            ))}
        </Box>

        {/* Center - Website Name */}
        {navbarData
          .filter((item) => item.name === "heading")
          .map((item, index) => (
            <Typography key={index} variant="h6" className={styles.heading}>
              {item.label}
            </Typography>
          ))}

        {/* Right Section - Profile, Heart, Bag, and Menu */}
        <Box className={styles.rightSection}>
          {navbarData
            .filter((item) => item.name !== "search" && item.name !== "heading")
            .map((item, index) => (
              <IconButton key={index} color="inherit">
                {item.icon}
              </IconButton>
            ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
