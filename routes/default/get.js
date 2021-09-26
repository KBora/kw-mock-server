const GET_ROUTES = {
  "/backend/get": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/dummy01.json",
  },
  "/backend/get/12342/2342%20": {
    statusCode: 200,
    delay: 1500,
    json: [
      "responses/default/dummy01.json",
      "responses/default/dummy02.json"      
    ],
  },
  "/planets": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/planets.json",
  },
  "/moons/1": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/moon1.json",
  },
  "/moons/2": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/moon2.json",
  },
  "/moons/3": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/moon3.json",
  },
  "/moons/4": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/moon4.json",
  },
  "/moons/5": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/moon5.json",
  },
  "/moons/6": {
    statusCode: 200,
    delay: 1500,
    json: "responses/default/moon6.json",
  }

};
module.exports = GET_ROUTES;
