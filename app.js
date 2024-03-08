// Put your name and ID here 

const express = require("express");
const path = require("path");

const app = express();

// Set the path to the "public" directory
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.get("/games", (req, res) => {
  res.sendFile(path.resolve(publicPath, "gamepage/games.html"));
});

app.get("/aboutus", (req, res) => {
  res.sendFile(path.resolve(publicPath, "aboutus/aboutus.html"));
});

// Insert additional code for other routes as needed

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
