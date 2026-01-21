const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Finance Manager API",
    description: "API for managing a budget and financial transactions",
  },
};

// host and schemes can be omitted for a more dynamic association. (ommit in swagger.json)
// https://swagger.io/docs/specification/v2_0/api-host-and-base-path/

const outputFile = "./swagger.json";
const routes = ["./src/routes/index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
