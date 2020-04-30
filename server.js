const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
//Now we can accept body data in the form of json

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to contact keeper api" });
});

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER started on port ${PORT}`);
});
