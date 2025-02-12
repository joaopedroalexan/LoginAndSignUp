import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v2",
  headers: { Accept: "application/json" },
});

const sheets = {
    postLogin:(user)=> api.post("loginUser/", user),
}
 export default sheets;