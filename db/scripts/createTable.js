//importing the pool function we wrote, and this allows us to connect to the database via postgress
import { pool } from "../index.js";

//async function becasue were creating a database
//adding what the values format will be for the params inside the SQL string
//const response is the actual query itself and we're injecting the SQL string inside the query
//the console.log is for our benefit to show us in the terminak that its working
export async function createTable() {
  const sqlString = `CREATE TABLE IF NOT EXISTS list (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        itemName TEXT,
        price INT
    );`;
  const response = await pool.query(sqlString);
  console.log(response.command);
}

//calling the creatTable function so when we run the createTable, it actually comes up
createTable();
