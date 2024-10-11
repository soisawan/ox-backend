import { pool } from "../database.js";
export default class userService {

    async updateScore(user_id, score) {
        let sql = `UPDATE user SET score = ? WHERE user_id = ?`;
        const [result] = await pool.query(sql, [score, user_id]);
    }
}

