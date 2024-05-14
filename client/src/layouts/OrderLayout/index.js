import React, { useState } from "react";
import OrderItem from "../../components/OrderItem";
import { Table, Pagination, Input, Dropdown } from "semantic-ui-react";
import "./index.scss";
import "semantic-ui-css/semantic.min.css";

const OrderLayout = ({ orders }) => {
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    orderNo: "",
    customerName: "",
    book: "",
    quantity: "",
    price: "",
    orderDate: "",
    total: ""
  });

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  const handleFilterChange = (e, { name, value }) => {
    setFilters({ ...filters, [name]: value });
    setActivePage(1);
  };

  const handleItemsPerPageChange = (e, { value }) => {
    setItemsPerPage(value);
    setActivePage(1);
  };

  const filteredOrders = orders.filter((order) =>
    order.OrderDetailId.toString().includes(filters.orderNo.toLowerCase()) &&
    order.CustomerName.toLowerCase().includes(filters.customerName.toLowerCase()) &&
    order.Title.toLowerCase().includes(filters.book.toLowerCase()) &&
    order.Quantity.toString().includes(filters.quantity.toLowerCase()) &&
    order.Price.toString().includes(filters.price.toLowerCase()) &&
    order.OrderDate.toString().includes(filters.orderDate.toLowerCase()) &&
    order.Subtotal.toString().includes(filters.total.toLowerCase())
  );

  const visibleOrders = filteredOrders.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div className="table-container">
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Order No
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="orderNo"
                value={filters.orderNo}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>Customer Name
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="customerName"
                value={filters.customerName}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>Book
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="book"
                value={filters.book}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>Quantity
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="quantity"
                value={filters.quantity}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>Book Price
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>Order Date
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="orderDate"
                value={filters.orderDate}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>Total
              <br />
              <Input fluid class="input"
                icon="search"
                placeholder="Search..."
                name="total"
                value={filters.total}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {visibleOrders.map((order) => (
            <Table.Row key={order.OrderDetailId}>
              <OrderItem order={order} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination
        activePage={activePage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(filteredOrders.length / itemsPerPage)}
        floated="right"
      />
      Items Per Page
      <Dropdown
        selection
        compact
        options={[
          { key: 5, text: "5", value: 5 },
          { key: 10, text: "10", value: 10 }
        ]}
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default OrderLayout;
