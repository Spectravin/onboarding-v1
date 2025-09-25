import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation, type NavigateFunction } from "react-router-dom";

const Sidebar = styled.nav`
  width: 220px;
  background-color: #20232a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const NavButton = styled.button<{ active?: boolean }>`
  border: none;
  text-align: left;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  background-color: ${({ active }) => (active ? "#61dafb" : "transparent")};
  color: ${({ active }) => (active ? "black" : "white")};
  border-radius: ${({ active }) => (active ? "6px" : "0")};

  &:hover {
    background-color: #61dafb;
    color: black;
    border-radius: 6px;
  }
`;

const Navigation = () => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();

  return (
    <Sidebar>
      <NavButton
        onClick={() => navigate("/")}
        active={location.pathname === "/"}
      >
        Day 1
      </NavButton>

      <NavButton
        onClick={() => navigate("/day2")}
        active={location.pathname.startsWith("/day2")}
      >
        Day 2
      </NavButton>

      <NavButton
        onClick={() => navigate("/day3")}
        active={location.pathname.startsWith("/day3")}
      >
        Day 3
      </NavButton>

      <NavButton
        onClick={() => navigate("/day4")}
        active={location.pathname.startsWith("/day4")}
      >
        Day 4
      </NavButton>
      

    </Sidebar>
  );
};

export default Navigation;