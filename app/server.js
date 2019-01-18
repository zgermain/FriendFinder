//Dependencies
const express = require("express");

//Express Config
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route to files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});