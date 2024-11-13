import axiosInstance from "../axiosInstanc";
import * as url from "../utils/urls";

const EmployeeServices = {
  getAllEmployee: function () {
    return axiosInstance.get(url.getEmployeeUrl);
  },
  createEmployee: function (payload) {
    return axiosInstance.post(url.createEmployeeUrl, payload);
  },

  uploadImage: function (payload) {
    return axiosInstance.post(url.uploadUrl, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-rapidapi-host": "file-upload8.p.rapidapi.com",
        "x-rapidapi-key": "your-rapidapi-key-here"
      }
    });
  },

  updateEmployee: function (payload) {
    return axiosInstance.post(url.UpdateEmployeeByIdUrl, payload);
  }
};

export default EmployeeServices;
