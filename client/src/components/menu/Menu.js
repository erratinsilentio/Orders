import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import style from "./menu.module.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useUserContext } from "../../utils/UserContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../../utils/ThemeContext";
import { useSelector } from "react-redux";
const pages = ["Clients", "Orders", "Invoices"];
export function ResponsiveAppBar() {
    const { isLoggedIn, loggedUser, logOut } = useUserContext();
    const { theme, toggleTheme } = useThemeContext();
    const moneyAmount = useSelector((state) => state.money.amount);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const settings = [
        loggedUser.current?.login,
        "Account",
        "Dashboard",
        "Logout",
    ];
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (_jsx(AppBar, { position: "static", style: { background: "#2E3B55" }, children: _jsx(Container, { maxWidth: "xl", children: _jsxs(Toolbar, { disableGutters: true, children: [_jsxs(Link, { to: "/", className: style.link, children: [_jsx(AttachFileIcon, { sx: { display: { xs: "none", md: "flex" }, mr: 1 } }), _jsx(Typography, { variant: "h6", noWrap: true, sx: {
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }, children: "INVOICE.ME" })] }), _jsxs(Box, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [_jsx(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit", children: _jsx(MenuIcon, {}) }), _jsx(Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }, keepMounted: true, transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                                    display: { xs: "block", md: "none" },
                                }, children: pages.map((page, index) => (_jsx(MenuItem, { onClick: handleCloseNavMenu, children: _jsx(Typography, { textAlign: "center", children: page }) }, page + index + 1))) })] }), _jsxs(Link, { to: "/", className: style.link, children: [_jsx(AttachFileIcon, { sx: { display: { xs: "flex", md: "none" }, mr: 1 } }), _jsx(Typography, { variant: "h5", noWrap: true, sx: {
                                    mr: 2,
                                    display: { xs: "flex", md: "none" },
                                    flexGrow: 1,
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }, children: "INVOICE.ME" })] }), _jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: pages.map((page, index) => (_jsx(Link, { className: style.link, to: page.toLowerCase(), children: _jsx(Button, { onClick: handleCloseNavMenu, sx: { my: 2, color: "white", display: "block" }, children: page }) }, page + index + 2))) }), _jsxs(Box, { sx: { flexGrow: 0 }, children: [_jsxs("div", { className: style.right, children: [isLoggedIn && (_jsx(Tooltip, { title: "Open settings", children: _jsx(IconButton, { onClick: handleOpenUserMenu, sx: { p: 0 }, children: _jsx(Avatar, { alt: "Remy Sharp", src: "/static/images/avatar/2.jpg" }) }) })), _jsx(IconButton, { sx: { ml: 1 }, onClick: toggleTheme, color: "inherit", style: { margin: "10px" }, children: theme === "dark" ? _jsx(Brightness7Icon, {}) : _jsx(Brightness4Icon, {}) }), _jsx(Link, { className: style.link, to: "/money", children: moneyAmount })] }), _jsx(Menu, { sx: { mt: "45px" }, id: "menu-appbar", anchorEl: anchorElUser, anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right",
                                }, keepMounted: true, transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right",
                                }, open: Boolean(anchorElUser), onClose: handleCloseUserMenu, children: settings.map((setting) => (_jsx(MenuItem, { onClick: handleCloseUserMenu, children: _jsx(Typography, { textAlign: "center", onClick: setting === "Logout" ? logOut : undefined, children: setting }) }, setting))) })] })] }) }) }));
}
export default ResponsiveAppBar;
