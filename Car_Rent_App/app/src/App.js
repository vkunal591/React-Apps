import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import ContactState from "./component/context/contact/ContactState";
import Cardbox from "./component/Cardbox";
import Pagination from "./component/Pagination";
import Searchbox from "./component/Searchbox";

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
                  <Searchbox />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/search"
              element={
                <React.Fragment>
                  <Searchbox />
                </React.Fragment>
              }
            />
            <Route
              exact
              path="/page/1"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/2"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/3"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/4"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/5"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/6"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/7"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/8"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/9"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
                </React.Fragment>
              }
            />{" "}
            <Route
              exact
              path="/page/10"
              element={
                <React.Fragment>
                  <Cardbox />
                  <Pagination />
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
