//importing the pool function we wrote, and this allows us to connect to the database via postgress
import { pool } from "../index.js";

//sqlString variable allows us to delete the table if it exists
const sqlString = `DROP TABLE IF EXISTS list;`;

//async function drops the table
async function dropTable() {
  const res = await pool.query(sqlString);
  console.log(res.command, "Table dropped.");
}

//calling the dropTable function so when we run the dropTable, it actually comes up
dropTable();
