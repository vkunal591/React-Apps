import React, { useState, useEffect, useContext } from "react";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCar,
  faHome,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import ContactContext from "./context/contact/contectContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const context = useContext(ContactContext);
  const { filters } = context;

  return (
    <>
      <nav
        aria-label="Page navigation example py-2 "
        className="navbar mb-1 mt-3 d-flex justify-content-between"
      >
        <div>
          <a
            className="btn btn-primary  "
            href="/property/newyork"
            role="button"
            onClick={filters}
          >
            New York
          </a>
          <a
            className="btn btn-primary  "
            href="/property/mumbai"
            role="button"
            onClick={filters}
          >
            Mumbai
          </a>
          <a
            className="btn btn-primary  "
            href="/property/paris"
            role="button"
            onClick={filters}
          >
            Paris
          </a>
          <a
            className="btn btn-primary  "
            href="/property/london"
            role="button"
            onClick={filters}
          >
            London
          </a>
        </div>
        <div>
          <a className="btn view-btn  " href="#" role="button">
            View All <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </nav>
    </>
  );
}
