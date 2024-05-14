import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CustomerItem = ({ customer }) => {
  return (
    <>
      <Table.Cell>
        <Link to={`customers/${customer.Name}`}>{customer.Name}</Link>
      </Table.Cell>
      <Table.Cell>{customer.Email}</Table.Cell>
      <Table.Cell>{customer.Address}</Table.Cell>
    </>
  );
};

export default CustomerItem;
