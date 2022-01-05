import passport from "passport";
import { Strategy } from "passport-jwt";
const { SECRET } = require("../constants");
import db from "../db";

const cookieExtractor = (req) => {
  let token = null; // default value
  if (req && req.cookies) {
    // if cookies are available
    token = req.cookies.jwt; // get the token from the cookies
  }
  return token; // return the token
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: SECRET,
};

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const { rows } = await db.query(`SELECT * FROM users WHERE id = $1`, [
        id,
      ]);
      if (rows[0]) {
        throw new Error("401 Unauthorized");
      }
      let { user_id, email } = rows[0];
      let user = { id: user_id, email };
      return await done(null, user);
    } catch (error) {
      console.log(error);
      done(error, false);
    }
  })
);
