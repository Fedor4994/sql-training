import app from "./app.js";

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
