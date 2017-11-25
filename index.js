const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./keys');
require('./models/contentModel');

/*mongoose.connect('mongodb://localhost:27020/addSkill');*/
mongoose.connect(keys.mogoURI);

const app = express();
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));
require("./routes/route")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
