require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.info = () => {};
}

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.warn(`Server running on port ${PORT}`);
});
