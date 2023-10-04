import React from "react";
import Carcard from "./Carcard";
import { useEffect, useContext } from "react";
import ContactContext from "./context/contact/contectContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

export default function Cardbox() {
  const context = useContext(ContactContext);
  const { filter, carslist, carListData } = context;

  useEffect(() => {
    return () => carListData();
  }, []);

  return (
    <>
      <div className="container w-90 mx-auto">
        <div className="row" id="cardbox1">
          {carslist.map((car) => {
            return (
              <div className="col-md-4" key={car.id}>
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
              </div>
            );
          })}
        </div>
        <div className="loadmore-btn-box" style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary loadmore-btn mx-auto active"
            style={{ height: "2.8rem", width: "9rem", borderRadius: "25px" }}
          >
            <FontAwesomeIcon icon={faHourglassEnd} className="mx-1" />
            Show More
          </button>
        </div>
      </div>
      {/* <div className="card-group">
       
      </div> */}
    </>
  );
}
