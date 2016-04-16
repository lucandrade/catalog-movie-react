var development = /(localhost)/.test(window.location.href);
var url = "http://catalogmovie.herokuapp.com/";
var api_url = "http://catalogmovie.herokuapp.com/";
var image_uri = "resources/img/";

if (development) {
  api_url = "http://localhost:8080/";
  url = "http://localhost/catalog-movie/dist/";
  image_uri = "img/";
}

export default {
  url,
  api_url,
  image_uri
}