import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";

import { register } from "../../services/usersServices";
import { AuthContext } from "../contexts/UserContext";

import { LoadingSpinner } from "../common/Spinner";

export const Register = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  let [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const minLength = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < bound,
    }));
  };

  const isEmail = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
        values[e.target.name]
      ),
    }));
  };

  function rePasswordChecker(e) {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name] !== values.password,
    }));
  }

  function activation() {
    let mayActivate = false;

    if (
      values.username.length >= 4 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email) &&
      values.password.length >= 4 &&
      values.rePassword === values.password
    ) {
      mayActivate = true;
    }

    return mayActivate;
  }

  function onSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const data = new FormData(e.target);

    let username = data.get("username");
    let email = data.get("email");
    let password = data.get("password");
    let rePassword = data.get("rePassword");

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      console.log("You should fill in a valid email address.");
      return;
    }

    if (username.length < 4) {
      console.log("Your username should be at least four (4) characters long.");
      return;
    }

    if (password.length < 4) {
      console.log("Your password should be at least four (4) characters long.");
      return;
    }

    if (rePassword !== password) {
      console.log("Passwords do not match.");
      return;
    }

    register(username, email, password)
      .then((response) => response.json())
      .then((result) => {
        if (result._id) {
          userLogin(result);
          navigate("/");
        } else {
          navigate("*");
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigate("*");

        setIsLoading(false);
      });
  }

  return (
    (isLoading && <LoadingSpinner />) || (
      <main>
        <div className="register-box">
          <h1>Register</h1>
          <h4>It only takes a minute</h4>
          <form onSubmit={onSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username..."
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 4)}
              value={values.username}
            />
            {errors.username && (
              <span className="error">
                Your username should be at least four (4) characters long.
              </span>
            )}
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email.."
              onChange={changeHandler}
              onBlur={(e) => isEmail(e)}
              value={values.email}
            />
            {errors.email && (
              <span className="error">
                You should fill in a valid email address.
              </span>
            )}

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 4)}
              value={values.password}
            />
            {errors.password && (
              <span className="error">
                Your password should be at least four (4) characters long.
              </span>
            )}
            <label>Confirm Password</label>
            <input
              type="password"
              name="rePassword"
              placeholder="Confirm Password..."
              onChange={changeHandler}
              onBlur={(e) => rePasswordChecker(e)}
              value={values.rePassword}
            />
            {errors.rePassword && (
              <span className="error">Your passwords do not match.</span>
            )}
            <input
              type="submit"
              value="Submit"
              className={activation() ? "active" : "not-active"}
              disabled={activation() ? false : true}
            />
          </form>
          <p>
            Already have an account? <Link to="/users/login">Login here</Link>
          </p>
        </div>
      </main>
    )
  );
};
