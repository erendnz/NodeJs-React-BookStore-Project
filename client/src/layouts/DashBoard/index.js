import React from "react";
import { Route, Routes } from "react-router";
import { Grid } from "semantic-ui-react";
import CustomersPage from "../../pages/Customers";
import OrdersPage from "../../pages/Orders";

export const Dashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Routes>
              <Route path="/" element={<OrdersPage />} exact />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};