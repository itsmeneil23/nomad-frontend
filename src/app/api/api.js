"use server";

import axios from "axios";

const baseURL = "YOUR_BASE_URL_HERE";

export default async function Api({ data, endpoint }) {
  try {
    const response = await axios.post(`${baseURL}/${endpoint}`, {
      data
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throwing the error to handle it where this function is called
  }
}
