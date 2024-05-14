import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CustomerLayout from "../../layouts/CustomerLayout";
import { getCustomers } from "../../services/customerService";

const CustomersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((response) => {
      console.log(response);
      setCustomers(response);
    });

    const name = searchParams.get("name");
    console.log(name);
  }, []);

  return <CustomerLayout customers={customers} />;
};

export default CustomersPage;