import { useForm } from "react-hook-form";
import EmployeeServices from "../services/EmployeeService";
import authServices from "../services/authServices";
import { useState } from "react";

export default function UpdateEmployee() {
  const { register, handleSubmit, reset,resetField } = useForm();

  const createUser = async (data) => {
    try {
      const userPayload = {
        image: data?.image,
        name: data?.name,
        email: data?.email,
        mobile: data?.mobile,
        designation: data?.designation,
        gender: data?.gender,
        course: data?.course
      };
      await EmployeeServices.createEmployee(userPayload).then((res) => {
        reset();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoading, setisLoading] = useState(false)
  const [imageName, setImageName] = useState();
  const uploadFile = async (event) => {
    setisLoading(true);
    const name = event.target.name;
    try {
      const file = event.target.files;
      const formData = new FormData();
      formData.append("file", file);
      console.log(file, formData, event.target.files)
      await EmployeeServices.uploadImage(formData).then((res) => {
        console.log(res.data)
        setImageName(res.data.filename);
        resetField("file");
      });
    } catch (error) {
      console.error("Upload Failed");

      setImageName("Choose File");
      resetField("file");
    }finally{
    setisLoading(false);

    }
  };

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      {/* <Pageheader Title="Create User" /> */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create User</h3>
                </div> */}

                <form onSubmit={handleSubmit(createUser)}>
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            {...register("name")}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          {...register("email")}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Mobile No
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Mobile No"
                          {...register("mobile")}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">
                          Designation
                        </label>
                        <select
                          class="form-select"
                          {...register("designation")}
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="Manager">Manager</option>
                          <option value="Frontend Dev">
                            Frontend Developer
                          </option>
                          <option value="Backend Dev">Backend Developer</option>
                        </select>
                      </div>
                      <label htmlFor="password" className="form-label">
                        Gender
                      </label>
                      <div className="form-group d-flex ">
                        <div class="form-check mx-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value={"male"}
                            {...register("gender")}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <div class="form-check mx-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            value={"female"}
                            {...register("gender")}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                      <label htmlFor="password" className="form-label">
                        Course
                      </label>
                      <div className="form-group d-flex">
                        <div class="form-check mx-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="MCA"
                            id="flexCheckDefault"
                            {...register("course")}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            MCA
                          </label>
                        </div>
                        <div class="form-check mx-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="BCA"
                            id="flexCheckDefault"
                            {...register("course")}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            BCA
                          </label>
                        </div>
                        <div class="form-check mx-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="B.Sc"
                            id="flexCheckDefault"
                            {...register("course")}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            B. Sc
                          </label>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="formFile" class="form-label">
                          Profile Image
                        </label>
                        <input
                          class="form-control"
                          {...register("image")}
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <div className="">
                            <label htmlFor="upload1" className="form-control">
                              {isLoading ? (
                                <i
                                  className="fa  fa-spin border-2 inline-block p-2 "
                                  style={{
                                    borderRadius: "100%",
                                    borderBottom: "none",
                                    borderTop: "none",
                                    width: "4px"
                                  }}
                                />
                              ) : (
                                imageName
                              )}
                            </label>

                            <input
                              id={`upload1`}
                              className="form-control col-6"
                              type="file"
                              {...register(`file`, {
                                onChange: async (e) => {
                                  uploadFile(e);
                                  console.log(e.target.files)
                                }
                              })}
                              hidden
                            />
                          </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer text-left">
                      <button type="submit" className="btn btn-primary">
                        Create
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
