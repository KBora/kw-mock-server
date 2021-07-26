const path = require("path");
const fs = require('fs');
const forEach = require("lodash/forEach");
const appRouter = function (app, scenario) {
  const GET_ROUTES = require(`./routes/${scenario}/get`);
  const POST_ROUTES = require(`./routes/${scenario}/post`);
  const PUT_ROUTES = require(`./routes/${scenario}/put`);

  forEach(GET_ROUTES, (mock, url) => {
   let i = -1;
    const increment = (len) => {
      i = i < len - 1 ? i + 1 : 0;
      return i;
    };
    app.get(url, (req, res) => {
      console.log(url);
      setTimeout(() => sendRes(mock, req, res, increment), mock.delay || 0);
    });
  });

  forEach(POST_ROUTES, (mock, url) => {
    let i = -1;

    const increment = (len) => {
      i = i < len - 1 ? i + 1 : 0;
      return i;
    };
    app.post(url, (req, res) => {
      setTimeout(() => sendRes(mock, req, res, increment), mock.delay || 0);
    });
  });

  forEach(PUT_ROUTES, (mock, url) => {
    let i = -1;

    const increment = (len) => {
      i = i < len - 1 ? i + 1 : 0;
      return i;
    };

    app.put(url, (req, res) => {
      setTimeout(() => sendRes(mock, req, res, increment), mock.delay || 0);
    });
  });
};

function sendRes(mock, req, res, increment) {
  console.log(req.url);
  let target;
  if (!("json" in mock)) {
    mock.json = "responses/_.json";
  }

  if (mock.error) {
    if (Array.isArray(mock.json)) {
      target = path.join(__dirname, "responses/_.json");
    } else {
      target = path.join(__dirname, mock.json);
    }
    console.log("[mock] serving", target);
    res.status(+mock.errorCode || mock.statusCode).sendFile(target);
  } else {
    if (mock.statusCode === 201) {
      res.status(201).send(null).end();
    } else {
      if (Array.isArray(mock.json)) {
        const index = increment(mock.json.length);
        target = path.join(__dirname, mock.json[index]);
      } else {
        target = path.join(__dirname, mock.json);
      }
    }

    req.headers["X-Custom-Header"] = "yes";
    console.log("[mock] serving", target);
    if (target) {
      // convert file to json
      const jsonResponse = loadData(target);
      res.status(mock.statusCode || 200).send(jsonResponse);
    }
  }
}

const loadData = (path) => {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch (err) {
    console.error(err)
    return false
  }
}

module.exports = appRouter;
