import sql from "better-sqlite3";

const db = sql("schools.db");

export async function getSchools() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM schools").all();
}
