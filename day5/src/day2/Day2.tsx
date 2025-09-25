import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const menuItems = [
  { path: "profile", label: "Profile" },
  { path: "todolist", label: "Todo List" },
  { path: "curleybraces", label: "Curley Braces" },
  { path: "parent", label: "Parent Component" },
  { path: "conditional", label: "Conditional Rendering" },
  { path: "list", label: "Rendering List" },
  { path: "pure", label: "Pure Component" },
  { path: "tree", label: "Component Tree" },
];

const Day2: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Day2: Describing the UI</h1>

    
      <MenuBar>
        {menuItems.map((item) => {
          const active = location.pathname.endsWith(item.path);
          return (
            <StyledLink
              key={item.path}
              to={item.path}
              $active={active}
            >
              {item.label}
            </StyledLink>
          );
        })}
      </MenuBar>

      <hr />
      <Outlet />
    </div>
  );
};

export default Day2;

const MenuBar = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  background: ${(props) => (props.$active ? "#61dafb" : "#e0e0e0")};
  color: ${(props) => (props.$active ? "black" : "inherit")};
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.$active ? "#21a1f1" : "#d5d5d5")};
  }
`;
