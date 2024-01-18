import React from "react";
import Categories from "./Categories";
import CarList from "../pages/CarList";
import { Grid } from "semantic-ui-react";
import { Route, Routes} from "react-router-dom";
import CarDetail from "../pages/CarDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes><Route exact path="/" Component={CarList}/></Routes>
            <Routes><Route exact path="/cars" Component={CarList}/></Routes>
            <Routes><Route path="/cars/:id" Component={CarDetail}/></Routes>
            <Routes><Route path="/cart" Component={CartDetail}/></Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
