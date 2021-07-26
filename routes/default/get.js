const GET_ROUTES = {
  "/backend/get": {
    statusCode: 200,
    delay: 500,
    json: "responses/default/dummy01.json",
  },
  "/backend/get/12342/2342%20": {
    statusCode: 200,
    delay: 500,
    json: [
      "responses/default/dummy01.json",
      "responses/default/dummy02.json"      
    ],
  },
};
module.exports = GET_ROUTES;
