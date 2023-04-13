import * as React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const Menu = () => {
  const navigate = useNavigate;

  return (
    <NavLink
      to="/products"
    >
      <ListItemButton>
        <ListItemIcon>
          <ProductionQuantityLimitsIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
    </NavLink>
  );
};

export default Menu;
