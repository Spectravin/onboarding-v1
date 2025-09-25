import react from  'react';


import {useNavigate,useLocation,} from "react-router-dom";
const TopMenu = ({ items }: { items: { label: string; path: string }[] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      {items.map((item) => {
        const active = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              padding: "8px 14px",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              background: active ? "#61dafb" : "#e0e0e0",
              color: active ? "black" : "inherit",
              fontWeight: active ? "bold" : "normal",
              transition: "background 0.2s",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
export default TopMenu;