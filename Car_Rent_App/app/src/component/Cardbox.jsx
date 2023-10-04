import React from "react";
import Carcard from "./Carcard";
import { useEffect, useContext } from "react";
import ContactContext from "./context/contact/contectContext";

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
      {/* <div className="card-group">
       
      </div> */}
    </>
  );
}
