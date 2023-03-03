import { pool } from "../config/mysql-config.js";

export async function getUserRole () {
    const [ rows ] = await pool.query(`select * from user_role`)
    console.log(rows)
    return rows
}

export async function addUserRole (roleName) {
    const query = `insert into user_role (user_role_name) values ('${roleName}')`
    const [rows] = await pool.query(query)

    return rows
}