const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const contact = require('./src/routes/contact');
const { config } = require("./src/config/config");
const testimonials = require('./src/routes/testimonials');
const listenig = require('./src/routes/listening');
const fishing = require('./src/routes/fishing');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.disable('x-powered-by'); //deshabilitar header x-powered-by

contact(app);
fishing(app);
testimonials(app);
listenig(app);

const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
