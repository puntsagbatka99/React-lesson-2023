import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
    const [rows] = await pool.query(`select * from product;`);

    await Promise.all(
        rows.map(async (row) => {
            console.log(row);
            const descriptions = await getDescriptions(row.id);
            row.description = descriptions.map(d => d.description);
            const reviews = await getReviews(row.id)
            row.reviews = reviews;
            const imgUrl = await getImages(row.id)
            row.imgUrl = imgUrl;
            const sizes = await getSizes(row.id)
            row.sizes = sizes.map((s) => s.size);
            const colors = await getColors(row.id)
            row.color = colors.map((c) => c.color);
        })
    );
    return rows;
}

export async function search(keyword) {
    const [rows] = await pool.query(`select * from product WHERE title LIKE '%${keyword}%';`);

    await Promise.all(
        rows.map(async (row) => {
            console.log(row);
            const descriptions = await getDescriptions(row.id);
            row.description = descriptions.map(d => d.description);
            const reviews = await getReviews(row.id)
            row.reviews = reviews;
            const imgUrl = await getImages(row.id)
            row.imgUrl = imgUrl;
            const size = await getSizes(row.id)
            row.size = size.map((s) => s.size);
            const colors = await getColors(row.id)
            row.color = colors.map((c) => c.color);
            console.log(descriptions)
        })
    );
    return rows;
}

export async function getDescriptions (productId){
    const [rows] = await pool.query(`select * from product_description where product_id = ?`, [productId])
    return rows
}

export async function getReviews (productId){
    const [rows] = await pool.query(`select customer, review from product_reviews where product_id = ?`, [productId])
    return rows
}

export async function getImages (productId){
    const [rows] = await pool.query(`select original, thumbnail from product_images where product_id = ?`, [productId])
    return rows
}

export async function getSizes (productId){
    const [rows] = await pool.query(`select s.size from product_size as ps left join size as s on ps.size_id = s.id where product_id = ?`, [productId])
    return rows
}
export async function getColors (productId){
    const [rows] = await pool.query(`select c.color from product_color as pc left join color as c on pc.color_id = c.id where product_id = ?`, [productId])
    return rows
}
