const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use("/", require("./routes/todos"));
app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
    console.log(`Sever running on ${PORT}...`);
});
