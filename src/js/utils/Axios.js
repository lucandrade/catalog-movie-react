import Axios from "axios";

import Constants from '../constants/AppConstants';

var instance = Axios.create({
  baseURL: Constants.api_url
});

export default instance;