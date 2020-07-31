import React, { useState } from "react";
import { useSelector } from "react-redux";

import Aux from "../Auxillary/Auxillary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const isAuthenticated = useSelector((state => state.auth.token !== null));

  const sideDrawerCLosedHandler = () => {
    setSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!sideDrawer)
  };

    return (
      <Aux>
        <Toolbar
          isAuth={isAuthenticated}
          drawerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={isAuthenticated}
          open={sideDrawer}
          closed={sideDrawerCLosedHandler}
        />
        <main className={classes.Content}>{props.children}</main>
      </Aux>
    );
  }

export default Layout;
