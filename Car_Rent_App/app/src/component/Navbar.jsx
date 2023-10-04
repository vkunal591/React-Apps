import React, { useState, useEffect, useContext } from "react";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactContext from "./context/contact/contectContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const context = useContext(ContactContext);
  const { handleSearchInput, filters } = context;

  return (
    <>
      <nav
        aria-label="Page navigation example py-2 "
        className="nav-box mb-1 mt-3"
      >
        <button type="button" className="btn btn-transparent ">
          <a href="/">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </button>
        <button type="button" className="btn btn-transparent ">
          <a href="/page/1">
            <FontAwesomeIcon icon={faCar} />
          </a>
        </button>
        <div className="input-group  mx-3 mb-3 search-box">
          <input
            type="text"
            className="form-control search"
            placeholder="Search Cars.."
            aria-label="Search cars"
            aria-describedby="button-addon2"
            onChange={handleSearchInput}
            name="search"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={filters}
          >
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-transparent dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Relevance
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="">
                4 People"
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="">
                Gasoline
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="">
                Automatic
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="">
                milase
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-transparent dropdown-toggle drop-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Brands
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="">
                TATA
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="">
                Mahindra
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="">
                Audi
              </a>
            </li>

            <li>
              <a className="dropdown-item" href="">
                BMW
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
