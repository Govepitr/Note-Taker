const express = require("express")

const app = express()
const PORT = 4159


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

app.listen(PORT, function() {
  console.log(`Welcome, to The Grid..I mean Port ${PORT}. Tron, gotta love it.`)
})

