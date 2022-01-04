import pool from "../db";
export const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    console.log(rows);
    res.json(rows);
  } catch (error) {
    let e = error as ErrorEvent;
    console.log(e.message);
  }
};
