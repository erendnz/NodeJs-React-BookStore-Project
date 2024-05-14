import axios from "axios";
import { customersURL } from "../constants/apiUrl";

//asynchronous function to fetch customers
export async function getCustomers() {
  const response = await axios.get(customersURL);
  return response.data;
};