//importing the pool function we wrote, and this allows us to connect to the database via postgress
import { pool } from "../index.js";

//importing the dummy date so we have something to populate the table with via a for loop
import list from "../index.js";

//populateTable function uses a for loop to iterate through the dummy data list we imported and add each one to the table that we created
//Used $ signs to sanitise the information
export async function populateTable() {
  for (let i = 0; i < list.length; i++) {
    const res = await pool.query(
      `INSERT INTO list (itemName, price) VALUES ($1,$2) RETURNING *;`,
      [list[i].itemName, list[i].price]
    );
    console.log(res.command + " populated table");
  }
}

//calling the populateTable function so when we run the populateTable, it actually comes up
populateTable();
