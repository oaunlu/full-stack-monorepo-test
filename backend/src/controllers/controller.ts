import { Database } from "@services/database";

export class Controller {
  constructor() {}

  get() {
    Database.getInstance();
  }

  post() {}

  put() {}

  delete() {}
}
