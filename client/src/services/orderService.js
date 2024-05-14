import axios from "axios";
import { ordersURL } from "../constants/apiUrl";

//asynchronous function to fetch orders
export async function getOrders() {
  const response = await axios.get(ordersURL);
  return response.data;
};