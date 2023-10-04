import React from "react";
import Carcard from "./Carcard";
import {  useContext } from "react";
import ContactContext from "./context/contact/contectContext";

export default function Searchbox() {
  const context = useContext(ContactContext);
  const { searchCarsList } = context;

  return (
    <>
      <div className="container w-90 mx-auto">
        <div className="row" id="cardbox1">
          {searchCarsList.map((car) => {
            return (
              <div className="col-md-4" key={car.image}>
                <Carcard
                  title={car.title}
                  image={car.image}
                  startproduction={car.startproduction}
                  people={car.people}
                  geartype={car.geartype}
                  milase={car.milase}
                  type={car.type}
                  price={car.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
