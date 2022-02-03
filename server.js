const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Welcome to the Contact Manager."));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
