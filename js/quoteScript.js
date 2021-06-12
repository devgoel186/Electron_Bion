const request = require("request");

request(
  "https://goquotes-api.herokuapp.com/api/v1/random?count=1",
  (error, response, body) => {
    let bodyJSON = JSON.parse(body);
    let randomQuote = bodyJSON.quotes[0].text;
    document.getElementById("quote").innerHTML = randomQuote;
  }
);

setInterval(() => {
  request(
    "https://goquotes-api.herokuapp.com/api/v1/random?count=1",
    (error, response, body) => {
      let bodyJSON = JSON.parse(body);
      let randomQuote = bodyJSON.quotes[0].text;
      document.getElementById("quote").innerHTML = randomQuote;
    }
  );
}, 5000);
