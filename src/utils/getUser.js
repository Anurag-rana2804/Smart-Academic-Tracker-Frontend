import axios from "axios";

export const getLoggedInUser = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    "http://localhost:5000/api/auth/me",
    {
      headers: { Authorization: token },
    }
  );

  return res.data;
};
