import axios from "axios";

export default function() {
  const token = localStorage.getItem("token"); // Example of getting the token on every request

  // Create an axios instance and set up the headers with the token
  // to use on every single call.

  // axiosWithAuth.post() example of how to use this helper
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` // Fat secret uses Bearer token
    }
  });
}
