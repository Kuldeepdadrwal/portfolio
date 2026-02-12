import sqlite3 from "sqlite3";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbFile = process.env.DB_PATH || "./data/portfolio.db";
const absoluteDbPath = resolve(__dirname, "..", dbFile);

fs.mkdirSync(dirname(absoluteDbPath), { recursive: true });

const db = new sqlite3.Database(absoluteDbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

export default db;
