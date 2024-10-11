import Jwt from "jsonwebtoken"
import config from "./config.js";

export const validateToken = (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader) {
      res.status(401).send({
        message: "unauthorized",
        cause: "authorization header not found",
      });
      return;
    }

    const [scheme, token] = authHeader.split(" ");
    const payload = Jwt.verify(token, config.app.jwtkey);

    if (!payload || scheme !== "Bearer") {
      res.status(401).send({
        message: "unauthorized",
        cause: "invalid token",
      });
      return;
    }
    req.user = payload;
    next();

  } catch (error) {
    res.status(401).send({
      status: 'error',
      code: 0,
      message: error.message,
      cause: "invalid token",
    });
}
}
