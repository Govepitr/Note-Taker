const express = require("express");

const PORT = process.env.PORT || 4159;

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apirRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(port, function() {
  console.log(`Welcome, to The Grid..I mean Port ${port}. Tron, gotta love it.`);
})

