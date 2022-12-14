const cors = (req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Origin", "https://react-beeproject-client.web.app");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, HEAD, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Authorization"
  );

  next();
};

module.exports = cors;
