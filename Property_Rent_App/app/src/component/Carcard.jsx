import React from "react";
import "./css/carcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAreaChart,
  faBath,
  faBed,
  faBuilding,
  faHeart,
  faLocationPin
} from "@fortawesome/free-solid-svg-icons";

export default function Carcard(props) {
  return (
    <>
      <div className="my-3" key={props.image}>
        <div className="card mx-auto">
          <div className="card-top-btn-box mx-auto">
            {" "}
            <button type="button" className="btn rent-btn mx-1">
              Rent Now
            </button>
            <button type="button" className="btn btn-outline-info fav-btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <img
            src={props.image}
            className="card-img-top mt-2"
            alt={props.title}
          />

          <div className="card-body mt-4 mb-0 pb-2">
            <button
              type="button"
              className="btn btn-primary popular-tag-btn mx-1"
            >
              <span></span>
              Popular
            </button>
            <h5
              className="card-title"
              style={{
                width: "100%",
                fontSize: "15px",
                fontWeight: "500"
              }}
            >
              <FontAwesomeIcon icon={faLocationPin} />
              {props.location}
            </h5>
            <h5
              className="card-title"
              style={{
                overflow: "hidden",
                width: "100%",
                height: "50px",
                fontSize: "1.3rem",
                fontWeight: "600"
              }}
            >
              {props.title}
            </h5>
          </div>
          <div className="card-content d-flex mb-2">
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faBuilding} className="mx-2 icon-color" />
              <br />
              {props.room}
            </p>
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faBed} className="mx-2 icon-color" />
              <br />
              {props.bed}
            </p>

            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faBath} className="mx-2 icon-color" />
              <br />
              {props.bath}
            </p>
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faAreaChart} className="mx-2 icon-color" />
              <br />
              {props.area}
            </p>
          </div>
          <hr style={{ widows: "80%", border: "1px dashed #cccdcd" }} />
          <div className="d-flex mb-3 card-foot justify-content-around ">
            <h4 className="text-body-secondary mx-4 mr-5">
              ₹{props.price}
              <span>/month</span>
            </h4>
            <button
              type="button"
              className="btn  btn-outline-primary readmore-btn mx-1"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
