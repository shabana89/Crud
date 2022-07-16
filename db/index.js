import pg from 'pg';

export const pool = new pg.Pool({
    connectionString: process.env.PGURI,
    ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback){
    return pool.query(text, params, callback)
}

const list = [

{
    id: 1,
    itemName: "Banana",
    price: 0.5
},
{
    id: 2,
    itemName: "Apple",
    price: 0.4
},
{
    id: 3,
    itemName: "Grapes",
    price: 1.2
},
{
    id: 4,
    itemName: "Cherries",
    price: 1.0
}

]

export default list;