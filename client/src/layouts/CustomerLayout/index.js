import React, { useState } from "react";
import CustomerItem from "../../components/CustomerItem";
import { Table, Pagination, Input, Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";

const CustomersLayout = ({ customers }) => {
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default olarak 5 müşteri gösterilsin
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    address: ""
  });

  // Event handler for page change
  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  // Event handler for filter change
  const handleFilterChange = (e, { name, value }) => {
    setFilters({ ...filters, [name]: value });
    setActivePage(1);
  };

  // Event handler for items per page change
  const handleItemsPerPageChange = (e, { value }) => {
    setItemsPerPage(value);
    setActivePage(1); 
  };

  // Filtering customers based on filter criteria
  const filteredCustomers = customers.filter((customer) =>
    customer.Name.toLowerCase().includes(filters.name.toLowerCase()) &&
    customer.Email.toLowerCase().includes(filters.email.toLowerCase()) &&
    customer.Address.toLowerCase().includes(filters.address.toLowerCase())
  );

   // Slicing visible customers based on pagination
  const visibleCustomers = filteredCustomers.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div className="table-container">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              {/* Input for filterings*/}
              Customer Name
              <br />
              <Input
                fluid
                icon="search"
                placeholder="Search name..."
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Email
              <br />
              <Input
                fluid
                icon="search"
                placeholder="Search email..."
                name="email"
                value={filters.email}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Address
              <br />
              <Input
                fluid
                icon="search"
                placeholder="Search address..."
                name="address"
                value={filters.address}
                onChange={handleFilterChange}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* Mapping through visible customers to render rows */}
          {visibleCustomers.map((customer) => (
            <Table.Row key={customer.id}>
              {/* Rendering CustomerItem component for each customer */}
              <CustomerItem customer={customer} /> 
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      
      {/* Pagination component */}
      <Pagination
        activePage={activePage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(filteredCustomers.length / itemsPerPage)}
        floated="right"
      />

      {/* Dropdown for selecting items per page */}
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

export default CustomersLayout;
