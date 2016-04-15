import Axios from "axios";

var instance = Axios.create({
  baseURL: 'http://localhost:8080/'
});

export default instance;