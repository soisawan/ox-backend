import { pool } from "../database.js";

export default class auth {
  async login(username, password) {

    const user = await getUserNameAndPassword(username, password);
    if (!user) {
      throw new Error("Invalid username or password");
    }
    return user;
  }

  async profile(user_id) {
    let sql = `SELECT name, score, image FROM user WHERE user_id = '${user_id}'`;
    const [user] = await pool.query(sql);
    return user[0];
  }
}

const getUserNameAndPassword = async (username, password) => {
  let sql = `SELECT user_id FROM user u
  WHERE u.username = '${username}'
  AND u.password = '${password}';`;

  const [[user]] = await pool.query(sql);
  return user;
};
