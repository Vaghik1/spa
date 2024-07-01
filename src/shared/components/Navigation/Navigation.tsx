import React from "react";
import { Nav, StyledNavLink, ThemeSwitcher } from "./Navigation.styles";
import { useTheme } from "../Theme/Theme";

const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/users">Users</StyledNavLink>
      <ThemeSwitcher onClick={toggleTheme}>
        Switch to {isDark ? "light" : "dark"} mode
      </ThemeSwitcher>
    </Nav>
  );
};

export default Navigation;
