const app = require("express")();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
