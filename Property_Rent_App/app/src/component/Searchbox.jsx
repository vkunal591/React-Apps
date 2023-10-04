import React, { useEffect, useState } from "react";
import Carcard from "./Carcard";
import { useContext } from "react";
import ContactContext from "./context/contact/contectContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Searchbox() {
  const context = useContext(ContactContext);
  const { searchCarsList, filters } = context;
  const [load, setLoad] = useState("1240");

  // console.log(load + "px");
  const loadmore = () => {
    if (load <= "1240") {
      setLoad(load * 1 + 620);
    }
  };

  useEffect(() => {
    filters();
  }, []);

  return (
    <>
      <div className="container w-90 mx-auto">
        <div
          className="row"
          id="cardbox1"
          style={{ overflow: "hidden", height: `${load}` + "px" }}
        >
          {searchCarsList.map((car) => {
            return (
              <div className="col-md-4" key={car.id} onClick={filters}>
                <a
                  href={"/property/" + car.id}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Carcard
                    title={car.title}
                    image={car.image}
                    location={car.location}
                    room={car.room}
                    area={car.area}
                    bath={car.bath}
                    bed={car.bed}
                    price={car.price}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="loadmore-btn-box" style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary loadmore-btn mx-auto active"
            style={{ height: "2.8rem", width: "9rem", borderRadius: "25px" }}
            onClick={loadmore}
          >
            <FontAwesomeIcon icon={faHourglassEnd} className="mx-1" />
            Show More
          </button>
        </div>
      </div>
    </>
  );
}
