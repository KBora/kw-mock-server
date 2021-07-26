const POST_ROUTES = {
  "backend/post": {
    statusCode: 200,
    json: [
      "responses/default/dummy01.json",
      "responses/default/dummy02.json"      
    ],
    delay: 500
  }
};

module.exports = POST_ROUTES;
