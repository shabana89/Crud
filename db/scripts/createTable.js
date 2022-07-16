import { pool } from '../index.js';

export async function createTable() {
    const sqlString = `CREATE TABLE IF NOT EXISTS list (
        id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        itemName TEXT,
        price INT
    );`;
const response = await pool.query(sqlString);
console.log(response.command);
}

createTable();