import axios from "axios";

// create a new "instance" of the axios module that has the Auth header built-in

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log({token})
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://potluck-3.herokuapp.com/"
  });
};

export default axiosWithAuth
