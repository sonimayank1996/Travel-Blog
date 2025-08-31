const app = require("./app");
const connectDB = require("./config/database");

connectDB();

app.listen(4040, () => {
  console.log("listen to port 4040");
});
