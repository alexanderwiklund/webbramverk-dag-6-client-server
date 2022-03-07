const express = require("express");

const router = express.Router();

router.get("/all", (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
  });
});

router.post("/create", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  response.json({
    status: "success",
    method: request.method,
    body: request.body,
  });
});

module.exports = router;
