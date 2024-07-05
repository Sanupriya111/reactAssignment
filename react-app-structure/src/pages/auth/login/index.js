import React, { useState } from "react";
import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../../assets/Rectangle.png";
import ZinfogLogo from "../../../assets/Frame7.png";
import Plus from "../../../assets/Vector5.png";
import SmallPlus from "../../../assets/Vector7.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login_page">
      <div className="container-fluid p-0">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="left_bg">
              <div className="box">
                <div className="shadow-box">
                  <div className="logo-container">
                    <img src={ZinfogLogo} alt="Logo" className="logo" />
                  </div>
                  <div className="">
                    <img src={Plus} alt="Plus" className="plus-container" />
                  </div>
                  <div className="">
                    <img
                      src={Plus}
                      alt="Plus"
                      className="small-plus-container"
                    />
                  </div>
                  <div className="">
                    <img
                      src={Plus}
                      alt="Plus"
                      className="medium-plus-container"
                    />
                  </div>
                  <div className="login-box">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                          <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                          />
                          {errors.username && (
                            <span className="error-message">
                              {errors.username}
                            </span>
                          )}
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                          />
                          {errors.password && (
                            <span className="error-message">
                              {errors.password}
                            </span>
                          )}
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-primary"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="image-container">
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginPage;
