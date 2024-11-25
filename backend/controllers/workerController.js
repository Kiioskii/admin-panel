const { addWorkerDB } = require("../services/workerService");
const { validWorkerData } = require("../middleware/workers/validWorkers");

const addWorker = async (req, res, next) => {
    try {
        const data = req.body;

        const queryParams = {
            first_nae: data.firstName,
            last_name: data.lastName,
            email: data.email,
            role_id: data.roleId,
        };

        const validation = validWorkerData(queryParams);

        if (!validation.status) {
            throw Error(validation.message);
        }

        const result = await addWorkerDB(queryParams);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

module.exports = { addWorker };
