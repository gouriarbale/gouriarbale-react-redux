import axios from "axios";
import endpoints from "./endpoints.json";
const instance = axios.create({
  baseURL: endpoints.serverURL,
});

export default instance;
