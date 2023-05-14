import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminRegister() {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    password: ""
  });

  const { Name, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    console.log(user);
    console.log("success");
  };

  return (
    <div>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: "300px",
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Admin Registration</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                  {/* 2 column grid layout with text inputs for the first and last names */}

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      name="firstName"
                      value={Name}
                      onChange={(e) => onInputChange(e)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Name
                    </label>
                  </div>


                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>







                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  {/* Submit button */}
                  <a href='\'>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"

                    >
                      Sign up jih
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  )
}

