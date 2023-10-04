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
  const [searchInput, setSearchInput] = useState("");

  // Handle onChange SearchInput
  const handleSearchInput = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setSearchInput({
      ...searchInput,
      [name]: value
    });
  };

  const filters = () => {
    let search = Cars.filter(
      element =>
        element.title
          .slice(0, searchInput.search.length)
          .toString()
          .toLowerCase() == `${searchInput.search.toString().toLowerCase()}`
    );

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
        handleSearchInput,
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
