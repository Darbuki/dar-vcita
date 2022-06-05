// get config values
const config = require('./config');
// default app port 3000
const port = config.app.port

// create react app with cors allowed for everyone and parser.
const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors()); //allow cors
// allow request body to be shown from x-www-form-urlencoded to be accessible
app.use(express.json()) 
app.use(express.urlencoded({
    extended: true
}))
// load  routes
const routes = require ('./routes/routes.config')
routes(app)
// load app with port from config
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
