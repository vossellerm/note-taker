const express = require("express");
const path = require("path");
const { clog } = require("./middlewear/clog");
console.log(typeof clog);
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

app.use(express.static("public"));

// GET Route for notes page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET Route for homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
