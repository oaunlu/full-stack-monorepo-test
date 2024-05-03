import express from "express";
import bodyParser from "body-parser";
import moment from "moment";

import router from "@/routes";
import Config from "@configs/index";

const app = express();

app.use(require("cors")());
app.use(require("cookie-parser")());

app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.locals.moment = moment;

app.use(router);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="color: red; max-width: fit-content; margin-inline: auto; ">Hello World!</h1>'
    );
});

app.listen(Config.port, () => {
  return console.log(`Express is listening at http://localhost:${Config.port}`);
});
