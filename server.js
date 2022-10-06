const express = require("express");

//
const app = express();
const PORT = 3000;

app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  res.send(`What's poppin ${name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let { total, tipPercentage } = req.params;
  let tip = (total *= tipPercentage / 100);
  res.send(` You owe me $${tip}`);
});

app.get("/magic/:question", (req, res) => {
  const { askMe } = req.params;
  const diffResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let myResponse =
    diffResponses[Math.floor(Math.random() * diffResponses.length)];
  res.send(`Magic 8 Ball's says: ${myResponse}`); // random response should show
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
