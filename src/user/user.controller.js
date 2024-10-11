import userService from "./user.service.js"

export const getUserController = async (req, res, next) => {

    try {
        const response = await new userService().updateScore()
        return res.status(200).send({
            status: 'success',
            code: 1,
            message: 'ดึงข้อมูลสำเร็จ',
            cause: '',
            result: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: 'fail',
            code: 0,
            message: error.message,
            cause: '',
            result: null
        });
    }
}

export const updateScoreController = async (req, res, next) => {

    try {
        const { user_id } = req.user;
        const { score } = req.body;
        const response = await new userService().updateScore(user_id, score)
        return res.status(200).send({
            status: 'success',
            code: 1,
            message: 'อัพเดทคะแนนสำเร็จ',
            cause: '',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: 'fail',
            code: 0,
            message: error.message,
            cause: '',
            result: null
        });
    }
}