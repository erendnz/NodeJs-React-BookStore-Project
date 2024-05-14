import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderLayout from "../../layouts/OrderLayout";
import { getOrders } from "../../services/orderService";

const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => {
      console.log(response);
      setOrders(response);
    });

    const name = searchParams.get("name");
    console.log(name);
  }, []);

  return <OrderLayout orders={orders} />;
};

export default OrdersPage;