function fetcher(method, url, data, user) {
  let headers = {};
  let request;

  console.log(user, "from fetcher");
  console.log(method);
  console.log(url);
  console.log(data);
  console.log(user);

  if (method === "GET") {
    request = fetch(url, { headers });
  } else {
    request = fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
        "x-authorization":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU2NTRkM2E3YjAzM2NjZjZlOGRjMDgiLCJlbWFpbCI6ImdiZ0BnYmcuYmciLCJpYXQiOjE2NTkzNTU5NjgsImV4cCI6MTY1OTQ0MjM2OH0.b0Zb36cnczaFK17wB9hF380GjuAhlOFk1P3QJ99K3eU",
      },
      body: JSON.stringify(data),
    });
  }

  console.log(request, "17 at fetcher");
  return request;
}

export const get = fetcher.bind({}, "GET");
export const post = fetcher.bind({}, "POST");
export const put = fetcher.bind({}, "PUT");
export const remove = fetcher.bind({}, "DELETE");
