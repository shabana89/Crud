import { pool } from "../db/index.js";

export async function getAllList() {
  const response = await pool.query(`SELECT * FROM list;`);
  console.log(response.rows);
  return response.rows;
}

export async function addToList(list) {
  const response = await pool.query(
    `INSERT INTO list (itemName, price) VALUES ($1,$2) RETURNING *;`,
    [list.itemName, list.price]
  );
  return response.rows;
}
