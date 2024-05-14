import React from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utilities/formatDate";

const OrderItem = ({ order }) => {
    return (
        <>
            <Table.Cell>{order.OrderDetailId}</Table.Cell>
            <Table.Cell>
                <Link to={`customers/${order.CustomerId}`}>
                    {order.CustomerName}
                </Link>
            </Table.Cell>
            <Table.Cell>{order.Title}</Table.Cell>
            <Table.Cell>{order.Quantity}</Table.Cell>
            <Table.Cell>{order.Price}</Table.Cell>
            <Table.Cell>{formatDate(order.OrderDate)}</Table.Cell>
            <Table.Cell>{order.Subtotal}</Table.Cell>
        </>
    );
};

export default OrderItem;
