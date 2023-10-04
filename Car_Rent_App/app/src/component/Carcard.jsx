import React from "react";
import "./css/carcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faGauge,
  faGear,
  faHeart,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";

export default function Carcard(props) {
  return (
    <>
      <div className="my-3" key={props.image}>
        <div className="card mx-auto">
          <img
            src={props.image}
            className="card-img-top mt-3"
            alt={props.title}
          />
          <div className="card-body d-flex justify-content-between mb-0 pb-2">
            <h5
              className="card-title"
              style={{
                overflow: "hidden",
                width: "50%",
                height: "30px",
                fontSize: "1.5rem",
                fontWeight: "400"
              }}
            >
              {props.title}
            </h5>
            <h5
              className="card-title"
              style={{
                border: "2px dashed skyblue",
                borderRadius: "12px",
                width: "60px",
                textAlign: "center"
              }}
            >
              {props.startproduction}
            </h5>
          </div>
          <div className="card-content d-flex mb-2">
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faUserGroup} className="mx-2 icon-color" />
              {props.people}
            </p>
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faGasPump} className="mx-2 icon-color" />
              {props.type}
            </p>
          </div>
          <div className="card-content d-flex mb-2">
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faGauge} className="mx-2 icon-color" />
              {props.milase}
            </p>
            <p className="mx-2 m-0">
              <FontAwesomeIcon icon={faGear} className="mx-2 icon-color" />
              {props.geartype}
            </p>
          </div>
          <hr style={{ widows: "80%" }} />
          <div className="d-flex mb-3 card-foot justify-content-around ">
            <h4 className="text-body-secondary mx-4 mr-5">
              ₹{props.price}
              <span>/month</span>
            </h4>
            <button type="button" className="btn btn-outline-info fav-btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button type="button" className="btn btn-primary mx-1">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
