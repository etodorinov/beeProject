function fetcher(method, url, data, user) {
  let headers = {};
  let request;

  const currentUser = localStorage.getItem("token");
  const availableUser = JSON.parse(currentUser || {});

  if (availableUser.accessToken) {
    headers["x-authorization"] = availableUser.accessToken;
  }

  if (method === "GET") {
    request = fetch(url, { headers });
  } else {
    request = fetch(url, {
      method,
      headers: {
        ...headers,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return request;
}

export const get = fetcher.bind({}, "GET");
export const post = fetcher.bind({}, "POST");
export const put = fetcher.bind({}, "PUT");
export const remove = fetcher.bind({}, "DELETE");
