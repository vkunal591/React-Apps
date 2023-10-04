import React, { useEffect, useContext } from "react";
import "./css/pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actioncreator } from "../state/index";
import ContactContext from "./context/contact/contectContext";

export default function Pagination() {
  const page = useSelector((pageNo) => pageNo.page);
  const dispatch = useDispatch();
  const action = bindActionCreators(actioncreator, dispatch);
  const context = useContext(ContactContext);
  const { prevPageno, carListData } = context;

  useEffect(() => {
    return () => {
      action.next(prevPageno);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Page navigation example py-2 "
        className="pagination-box mb-3"
      >
        <h6>1 from 10</h6>
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a
              className="page-link"
              href={`/page/${page}`}
              onClick={() => {
                carListData();
                if (page > 1) {
                  action.prev(1);
                } else {
                  action.prev(0);
                }
              }}
            >
              <span>&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/1"
              onClick={() => carListData()}
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/2"
              onClick={() => carListData()}
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/3"
              onClick={() => carListData()}
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/4"
              onClick={() => carListData()}
            >
              4
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/5"
              onClick={() => carListData()}
            >
              5
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/6"
              onClick={() => carListData()}
            >
              6
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/7"
              onClick={() => carListData()}
            >
              7
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/8"
              onClick={() => carListData()}
            >
              8
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/9"
              onClick={() => carListData()}
            >
              9
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="/page/10"
              onClick={() => carListData()}
            >
              10
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href={`/page/${page}`}
              onClick={() => {
                carListData();
                if (page < 10) {
                  action.next(1);
                } else {
                  action.next(0);
                }
              }}
            >
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
