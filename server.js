const express = require("express");

//
const app = express();
const PORT = 3000;

app.get("/greeting/:name", (req, res) => {
  const {name} = req.params
    res.send(`What's poppin ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
