import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import EmployeeServices from "../services/EmployeeService";
export default function EmployeeList() {
  const [EmployeeList, setEmployeeList] = useState();

  const getAllEmployee = async () => {
    try {
      await EmployeeServices.getAllEmployee().then((res) => {
        setEmployeeList(res.data.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getAllEmployee();
  }, []);

  return (
    <div>
      {/* <Pageheader Title="View Blog" /> */}

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">View Employee</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body p-0">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th style={{ width: "10px" }}></th>
                      <th>Profile Image</th>
                      
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>Designation</th>
                      <th>Gender</th>
                      <th>Course</th>
                      <th>Role</th>
                      <th style={{ width: "40px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EmployeeList &&
                      EmployeeList?.map((blog, index) => {
                        return (
                          <tr>
                            <td>{index + 1 + "."}</td>
                            <td><img src={blog?.image} alt={blog?.name} /></td>

                            <td>{blog?.name}</td>
                            <td>{blog?.email}</td>
                            <td>{blog?.mobile}</td>
                            <td>{blog?.designation}</td>
                            <td>{blog?.gender}</td>
                            <td>{blog?.course}</td>

                            <td>
                              <span
                                className={`badge ${
                                  blog?.isVerified ? "bg-success" : "bg-success"
                                }`}
                              >
                                {blog?.role === 1
                                  ? "Admin"
                                  : blog?.role === 2
                                  ? "Manager"
                                  : "Employee"}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex">
                                <Link to={"/editEmployee"} className="btn btn-outline-primary mx-1">
                                  <i className="fa fa-edit">Edit</i>
                                </Link>
                                <button className="btn btn-outline-danger">
                                  <i className="fa fa-trash">Delete</i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
