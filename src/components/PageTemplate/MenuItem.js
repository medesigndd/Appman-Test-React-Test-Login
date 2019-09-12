import React, { Fragment } from "react";

import {
  ListItem,
  ListItemIcon,
  DashboardIcon,
  ListItemText,
  ShoppingCartIcon,
  PeopleIcon,
  BarChartIcon,
  LayersIcon
} from "../../includes";
import { Link } from "react-router-dom";
export const mainListItems = (
  <Fragment>
    <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="dashboard" />
      </ListItem>
    </Link>
    <Link to="/customers" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="menu1" />
      </ListItem>
    </Link>
    <Link to="/orders" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="menu2" />
      </ListItem>
    </Link>
    <Link to="/reports" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="menu3" />
      </ListItem>
    </Link>
    <Link to="/integrations" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="menu4" />
      </ListItem>
    </Link>
  </Fragment>
);
