import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #282c34;
  padding: 1em;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  margin: 0 1em;
  text-decoration: none;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ThemeSwitcher = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  margin-left: 1em;
  padding: 0.5em 1em;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background: white;
    color: #282c34;
  }
`;
