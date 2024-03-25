import "dotenv/config";
import express from "express";

const app = express();


app.listen(8080, () => {
  console.log("Running web server on port 8080");
  console.log(`http://localhost:8080/`);
});