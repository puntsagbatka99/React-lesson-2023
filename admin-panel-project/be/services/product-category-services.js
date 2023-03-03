import { pool } from "../config/mysql-config.js";

export async function getProductCategory(){
    const [ rows ] = await pool.query(`select * from product_category`)
    console.log(rows)

    return rows
}

export async function addProductCategory(productCategoryName, productDescription) {
    const query = `insert into product_category (product_category_name, product_description) values('${productCategoryName}', '${productDescription}')`
    const [ rows ] = await pool.query(query)

    return rows
}