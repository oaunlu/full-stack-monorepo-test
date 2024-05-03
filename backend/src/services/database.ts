export class Database {
  connection: "Disconnected" | "Connected" = "Disconnected";
  private static instance: Database;
  private constructor() {}

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  connect() {
    this.connection = "Connected";
  }
}
