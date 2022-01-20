import React from "react";
import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import addProducts from "./components/addproducts";
import removeProducts from "./components/removeproducts";
import listProducts from "./components/listproducts";



export default function App() {
  const routes = ["/addproducts", "/removeproducts", "/listproducts"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >
                {console.log(history.location.pathname)}
                <Tab
                  value={routes[0]}
                  label="Add Products"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="Remove Products"
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  value={routes[1]}
                  label="Link Products"
                  component={Link}
                  to={routes[1]}
                  />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route path="/addproducts" component={addProducts} />
          <Route path="/removeproducts" component={removeProducts} />
          <Route path="/listproducts" component={listProducts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
