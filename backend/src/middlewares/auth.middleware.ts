// import passport from "passport";

// export const userAuth = passport.authenticate("jwt", { session: false });
const passport = require("passport");
const { Strategy } = require("passport-jwt");

exports.userAuth = passport.authenticate("jwt", { session: false });
