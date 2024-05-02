import express from "express";
import bodyParser from "body-parser";
import moment from "moment";

import router from "@/routes";

const app = express();

app.use(require("cors")());
app.use(require("cookie-parser")());

app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.locals.moment = moment;

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
