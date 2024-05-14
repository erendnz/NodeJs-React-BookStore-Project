import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

export const Nav = () => {
  return (
    <div>
      <Menu inverted color="black" size="huge" >
        <Container>
        <Menu.Item as={Link} to="/orders" name="Orders" />
          <Menu.Item as={Link} to="/customers" name="Customers" />
        </Container>
      </Menu>
    </div>
  );
};