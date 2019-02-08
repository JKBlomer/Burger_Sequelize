var express = require("express");


var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var db = require("./models");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





 require("./controllers/burgers_controller.js")(app);

// app.use(require("./controllers/burgers_controller.js")(app));

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});
  