import authService from "./auth.service.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import md5 from 'md5';
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const passwordHash = md5(password)
    const user = await new authService().login(username, passwordHash);

    if (!user) {
      return res.status(401).send({
        message: "unauthorized",
        cause: "",
      });
    }

    const token = jwt.sign(user, config.app.jwtkey, {
      expiresIn: "1m",
    });

    return res.status(200).send({
      status: "success",
      code: 1,
      message: "ดึงข้อมูลสำเร็จ",
      cause: "",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "fail",
      code: 0,
      message: error.message,
      cause: "",
      result: null,
    });
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const user = await new authService().profile(user_id);
    if (!user) {
      return res.status(401).send({
        message: "unauthorized",
        cause: "",
      });
    }

    return res.status(200).send({
      status: "success",
      code: 1,
      message: "ดึงข้อมูลสำเร็จ",
      cause: "",
      result: user,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "fail",
      code: 0,
      message: error.message,
      cause: "",
      result: null,
    });
  }
};
