import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid"; // Changed import
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AuthenticationModel from "./AuthenticationModel";
import Cookies from "js-cookie";

const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement>();
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement>();
  const [userCookie, setUserCookie] = useState<any | null>(null); // Initialize userCookie state to null

  // const router = useRouter(); // Get router instance

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(undefined);
  };

  useEffect(() => {
    const Cookie = Cookies.get("user");

    // Check if the cookie exists and is not undefined
    if (Cookie) {
      // Parse the JSON string stored in the cookie
      const parsedUser = JSON.parse(Cookie);
      console.log(parsedUser);
      setUserCookie(parsedUser);
    } else {
      console.log("User cookie does not exist or is undefined.");
    }
  }, []);

  // Handle login action
  const handleLogin = (user: any) => {
    setUserCookie(user);
  };

  const handleLogout = () => {
    Cookies.remove("user");
    setUserCookie(null);
    router.push("/"); // Redirect to the login page after logout
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        borderColor: "#D63E38",
        borderStyle: "solid",
        borderWidth: "0 0 1px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/src/assets/logoNav.png" alt="perso" />

          <Grid
            container
            alignItems="center"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="right" sx={{color:"#D63E38", fontSize: "1rem"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Grid>
          <Grid item xs={1} sx={{ flexGrow: 0 }}>
            {/* Render AuthenticationModel only if userCookie is null */}
            {!userCookie && <AuthenticationModel onLogin={handleLogin} />}
            {userCookie && (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userCookie.name}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={
                        setting === "Logout"
                          ? handleLogout
                          : handleCloseUserMenu
                      }
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
