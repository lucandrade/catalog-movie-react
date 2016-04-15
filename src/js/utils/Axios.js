import Axios from "axios";

var development = /(localhost)/.test(window.location.href);
var url = "http://catalogmovie.herokuapp.com/";

if (development) {
  url = "http://localhost:8080/";
}

var instance = Axios.create({
  baseURL: url
});

export default instance;