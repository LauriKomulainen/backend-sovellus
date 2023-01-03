const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// serve the public directory as a static content here
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/randomize", (req, res) => {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 3) + 1);
  }
  let message = "<table>";

  for (let i = 0; i < randomNumbers.length; i++) {
    message += `<tr><td>${randomNumbers[i]}</td></tr>`;
  }
  message += "</table>";
  if (
    randomNumbers[0] === randomNumbers[1] &&
    randomNumbers[1] === randomNumbers[2]
  ) {
    res.send(`Random numbers: ${message} Success`);
  }
  res.send(`Random numbers: ${message}`);
});
