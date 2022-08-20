import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { login } from "../../services/usersServices";
import { AuthContext } from "../contexts/UserContext";

import { LoadingSpinner } from "../common/Spinner";

export const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let [isLoading, setIsLoading] = useState(false);

  function changeHandler(e) {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

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

  function activation() {
    let mayActivate = false;

    if (
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email) &&
      values.password.length >= 4
    ) {
      mayActivate = true;
    }

    return mayActivate;
  }

  function onSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const data = new FormData(e.target);

    const email = data.get("email");
    const password = data.get("password");

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      console.log("You should fill in a valid email address.");
      return;
    }

    if (password.length < 4) {
      console.log("Your password should be at least four (4) characters long.");
      return;
    }

    login(email, password)
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
        <div className="login-box">
          <h1>Login</h1>
          <h4>Welcome back</h4>
          <form method="POST" onSubmit={onSubmit}>
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
              placeholder="Password.."
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 4)}
              value={values.password}
            />
            {errors.password && (
              <span className="error">
                Your password should be at least four (4) characters long.
              </span>
            )}
            <input
              type="submit"
              value="Submit"
              className={activation() ? "active" : "not-active"}
              disabled={activation() ? false : true}
            />
          </form>
          <p>
            Do not have an account?{" "}
            <Link to="/users/register">Register here</Link>
          </p>
        </div>
      </main>
    )
  );
};
