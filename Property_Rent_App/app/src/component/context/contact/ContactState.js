import { useState } from "react";
import React from "react";
import contactContext from "./contectContext";
import carsdata from "../../cars.json";

const ContactState = props => {
  const [Cars, setCars] = useState(carsdata);

  let urlElements = window.location.href.split("/");
  let currentPage = urlElements[4];
  let prevPageno = urlElements[4] - 1;

  // Cars All List Handel

  const car = [];
  const noOfCars = Cars.length;
  const noTotalPage = Math.ceil(noOfCars / 6);
  const pageNo = urlElements[4];
  const minNoOfCars = (pageNo - 1) * 6;
  const maxNoOfCars = pageNo * 6;
  const [carslist, setCarslist] = useState([]);

  // Extract n no of Card Data
  const carListData = () => {
    for (let i = minNoOfCars; i < maxNoOfCars; i++) {
      car[i] = Cars[i];
    }

    setCarslist(car);
  };

  // Search Filter

  const searchCars = [];
  const [searchCarsList, SetsearchCarsList] = useState([]);
  const [searchInput, setSearchInput] = useState(currentPage);

  const filters = () => {
    // console.log(searchInput);
    // console.log(Cars[1].place);
    // console.log(currentPage);
    let search
    if (currentPage.length >= 3) {
     search = Cars.filter(
        element =>
          element.place.toString().toLowerCase() ==
          `${searchInput.toString().toLowerCase()}`
      );
    } else {
       search = Cars.filter(
        element =>
          element.id.toString().toLowerCase() ==
          `${searchInput.toLowerCase()}`
      );
    }

  
    // console.log(search);
    if (search.length == "0") {
      return 0;
    } else {
      for (let index = 0; index < search.length; index++) {
        searchCars[index] = search[index];

        SetsearchCarsList(searchCars);
      }
      return searchCars;
    }
  };

  return (
    <contactContext.Provider
      value={{
        urlElements,
        currentPage,
        prevPageno,
        noOfCars,
        noTotalPage,
        pageNo,
        minNoOfCars,
        maxNoOfCars,
        carslist,
        setCarslist,
        carListData,
        filters,
        searchInput,
        setSearchInput,
        searchCarsList,
        SetsearchCarsList
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
