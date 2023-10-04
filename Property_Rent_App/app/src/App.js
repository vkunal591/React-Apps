import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import ContactState from "./component/context/contact/ContactState";
import Cardbox from "./component/Cardbox";

import Searchbox from "./component/Searchbox";
import property from './component/cars.json'

function App() {
  return (
    <>
      <ContactState>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <React.Fragment>
                  <Cardbox />
                </React.Fragment>
              }
            />{property.map((property)=>{
              <Route
              exact
              path={`/property/${property.id}`}
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />;
            })}
        
            <Route
              exact
              path="/property/mumbai"
              element={
                <React.Fragment>
                  <Searchbox />
                </React.Fragment>
              }
            />
                 <Route
              exact
              path="/property/newyork"
              element={
                <React.Fragment>
                  <Searchbox />
                </React.Fragment>
              }
            />
                 <Route
              exact
              path="/property/london"
              element={
                <React.Fragment>
                  <Searchbox />
                </React.Fragment>
              }
            />
                 <Route
              exact
              path="/property/paris"
              element={
                <React.Fragment>
                  <Searchbox />
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/property/1"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/property/2"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/property/3"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/property/4"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/property/5"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/property/6"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/7"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/8"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/4"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/5"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/6"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/7"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/8"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/9"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/property/10"
              element={
                <React.Fragment>
                  <Cardbox />
                   
                </React.Fragment>
              }
            /><Route
            exact
            path="/property/11"
            element={
              <React.Fragment>
                <Searchbox />
                 
              </React.Fragment>
            }
          /><Route
          exact
          path="/property/12"
          element={
            <React.Fragment>
              <Searchbox />
               
            </React.Fragment>
          }
        /><Route
        exact
        path="/property/13"
        element={
          <React.Fragment>
            <Searchbox />
             
          </React.Fragment>
        }
      /><Route
      exact
      path="/property/14"
      element={
        <React.Fragment>
          <Searchbox />
           
        </React.Fragment>
      }
    /><Route
    exact
    path="/property/15"
    element={
      <React.Fragment>
        <Searchbox />
         
      </React.Fragment>
    }
  /><Route
  exact
  path="/property/16"
  element={
    <React.Fragment>
      <Searchbox />
       
    </React.Fragment>
  }
/><Route
              exact
              path="/property/17"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            /><Route
            exact
            path="/property/18"
            element={
              <React.Fragment>
                <Searchbox />
                 
              </React.Fragment>
            }
          /><Route
          exact
          path="/property/19"
          element={
            <React.Fragment>
              <Searchbox />
               
            </React.Fragment>
          }
        /><Route
        exact
        path="/property/20"
        element={
          <React.Fragment>
            <Searchbox />
             
          </React.Fragment>
        }
      /><Route
      exact
      path="/property/21"
      element={
        <React.Fragment>
          <Searchbox />
           
        </React.Fragment>
      }
    /><Route
    exact
    path="/property/22"
    element={
      <React.Fragment>
        <Searchbox />
         
      </React.Fragment>
    }
  /><Route
  exact
  path="/property/23"
  element={
    <React.Fragment>
      <Searchbox />
       
    </React.Fragment>
  }
/><Route
              exact
              path="/property/24"
              element={
                <React.Fragment>
                  <Searchbox />
                   
                </React.Fragment>
              }
            /><Route
            exact
            path="/property/25"
            element={
              <React.Fragment>
                <Searchbox />
                 
              </React.Fragment>
            }
          /><Route
          exact
          path="/property/26"
          element={
            <React.Fragment>
              <Searchbox />
               
            </React.Fragment>
          }
        /><Route
        exact
        path="/property/27"
        element={
          <React.Fragment>
            <Searchbox />
             
          </React.Fragment>
        }
      /><Route
      exact
      path="/property/28"
      element={
        <React.Fragment>
          <Searchbox />
           
        </React.Fragment>
      }
    /><Route
    exact
    path="/property/29"
    element={
      <React.Fragment>
        <Searchbox />
         
      </React.Fragment>
    }
  />
  <Route
    exact
    path="/property/30"
    element={
      <React.Fragment>
        <Searchbox />
         
      </React.Fragment>
    }
  /><Route
  exact
  path="/property/31"
  element={
    <React.Fragment>
      <Searchbox />
       
    </React.Fragment>
  }
/>
<Route
    exact
    path="/property/32"
    element={
      <React.Fragment>
        <Searchbox />
         
      </React.Fragment>
    }
  /><Route
  exact
  path="/property/33"
  element={
    <React.Fragment>
      <Searchbox />
       
    </React.Fragment>
  }
/><Route
    exact
    path="/property/34"
    element={
      <React.Fragment>
        <Searchbox />
         
      </React.Fragment>
    }
  /><Route
  exact
  path="/property/35"
  element={
    <React.Fragment>
      <Searchbox />
       
    </React.Fragment>
  }
/>{" "}
          </Routes>{" "}
        </Router>{" "}
      </ContactState>{" "}
    </>
  );
}

export default App;
