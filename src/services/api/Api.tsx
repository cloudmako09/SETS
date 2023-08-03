import axios from "axios";

export const fetchProducts = async () => {
  try {
    const url = "http://localhost:3000/groups";
    const response = await axios.get(url);
    const products = response.data;
    console.log("Fetched data in API component:", products);
    return products;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
