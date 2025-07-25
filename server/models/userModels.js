import pool from "../database/db.js";


export const displayAll = async () => {
  const result = await pool.query("SELECT * FROM data");
  if (result === "") {
    return "no data in the db";
  }
    return result.rows;
}


export const NewtaskModel = async (title, content) => {
  return await pool.query(
    "INSERT INTO data (title, content) VALUES ($1, $2) RETURNING *",
    [title, content]
  );
};


export const DeletetaskModel = async (id) => {
  return await pool.query("DELETE FROM data WHERE id = $1 RETURNING *", [id]);
};


export const EdittaskModel = async (id, title, content) => {
  return await pool.query(
    "UPDATE data SET title = $1, content = $2 WHERE id = $3 RETURNING *",
    [title, content, id]
  );
};