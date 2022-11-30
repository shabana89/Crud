//allows you to use postgreSQL in JS
import pg from "pg";
import "dotenv/config";

//pool is the connection that allows multiple users at a time versus client which only allows one at a time
//connectionString allows you to access the URI credentials all in one
//ssl allows you to bypass the security
export const pool = new pg.Pool({
  connectionString: process.env.PGURI,
  ssl: { rejectUnauthorized: false },
});

//allows us to access postgreSQL so that backend can query database
export function query(text, params, callback) {
  return pool.query(text, params, callback);
}

//dummydata
const list = [
  {
    id: 1,
    itemName: "Banana",
    price: 2,
  },
  {
    id: 2,
    itemName: "Apple",
    price: 3,
  },
  {
    id: 3,
    itemName: "Grapes",
    price: 1,
  },
  {
    id: 4,
    itemName: "Cherries",
    price: 2,
  },
];

//exporting this list so that we can populate our database and also test our initial routes
export default list;
