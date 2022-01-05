import pool from "../db";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Request, Response, RequestHandler } from "express";
// import CONSTS from "../constants";
const { SECRET } = require("../constants");
// const { SECRET } = CONSTS;
// interface RequestWith extends RequestHandler {
//   user: { user_id: number; email: string };
// }
// type ReqResMethod = (req: Request| { user: { user_id: string; email: string } }, res: Response) => void;

export const getUsers = async (req, res) => {
  try {
    // const { rows } = await pool.query("SELECT * FROM users");
    const { rows } = await pool.query("SELECT user_id, email FROM users");
    console.log(rows);
    return res.status(201).json({ success: true, users: rows });
  } catch (error) {
    let e = error as ErrorEvent;
    console.log(e.message);
  }
};

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    const { rows } = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );
    return res
      .status(201)
      .json({ success: "User created successfully", data: rows[0] });
  } catch (error: unknown) {
    let e = error as ErrorEvent;
    console.log(e.message);
    return res.status(500).json({ error: e.message });
  }
};

export const login = async (req, res) => {
  const user = req.user;
  const payload = {
    id: user.user_id,
    email: user.email,
  };
  try {
    const token = sign(payload, SECRET); // token is the string that will be sent to the client
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      // httpOnly: true means that the cookie will not be accessible from the frontend
      success: true, // the user is logged in
      message: "login successful",
    });
  } catch (error: unknown) {
    let e = error as ErrorEvent;
    console.log(e.message);
    return res.status(500).json({ error: e.message });
  }
};

export const isProtected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    let e = error as ErrorEvent;
    console.log(e.message);
  }
};
