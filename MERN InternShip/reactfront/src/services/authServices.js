import axiosInstance from "../axiosInstanc";
import * as url from "../utils/urls";


const authServices =  {

  login: function (payload) {
    return axiosInstance.post(
      url.loginUrl,
      payload
    );
  },
  signup: function (payload) {
    return axiosInstance.post(
      url.signupUrl,
      payload
    );
  },

   logout: () => {
    localStorage.removeItem("token");
  }

};     


export default authServices;