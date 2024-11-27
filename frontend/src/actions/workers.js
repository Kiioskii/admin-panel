import { redirect } from "react-router-dom";
import { addWorker, getAllWorkers, getWorkerById } from "../api/api";

export const addWorkerAction = async ({ request }) => {
    const response = { status: 1 };
    const formData = await request.formData();

    const workerData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        role: formData.get("role"),
    };

    try {
        const apiResponse = await addWorker(workerData);
    } catch (err) {
        response.status = 0;
        response.message = err.response.data.message;
        return response;
    }

    return redirect("..");
};

export const workerLoader = async ({ request }) => {
    const out = { status: 1 };

    try {
        const response = await getAllWorkers();
        out.data = response.data.data;
    } catch (err) {
        out.status = 0;
        out.message = err.response.data.message;
    }

    return out;
};

export const workerEditLoader = async ({ request, params }) => {
    const out = { status: 1 };
    const workerId = params.workerId;

    try {
        const response = await getWorkerById({ workerId });
        console.log("response xxx", response);
        out.data = response.data.data;
    } catch (err) {
        out.status = 0;
        out.message = err.response.data.message;
    }

    return out;
};
