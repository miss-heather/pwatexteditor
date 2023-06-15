const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

try {
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
  } catch (error) {
    console.error('Error starting the server:', error);
  }
  