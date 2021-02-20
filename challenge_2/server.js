const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const PUBLIC_DIR = path.resolve('public');

app.use(express.static(PUBLIC_DIR));

app.use((res, req, next) => {
  console.log(`${req.method} from ${req.path}`);
  next();
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

