import * as fetcher from "../utils/fetcher";

const baseUrl = "http://localhost:30303/users";

export function register(username, email, password) {
  try {
    let data = { username, email, password };

    let request = fetcher.post(baseUrl + "/register", data);

    return request;
  } catch (error) {
    console.log(error);
  }
}

export function login(email, password) {
  try {
    let data = { email, password };

    let request = fetcher.post(baseUrl + "/login", data);

    return request;
  } catch (error) {
    console.log(error);
  }
}

// export function logout() {}
