import { redirect } from "react-router-dom";
import { addWorker, editWorker, getAllWorkers, getWorkerById, getAllRoles } from "../api/api";

export const addWorkerLoader = async () => {
    const out = { status: 1 };
    try {
        const response = await getAllRoles();
        out.data = response.data.data.data;
    } catch (err) {
        out.status = 0;
        out.message = err.response.data.message;
    }

    return out;
};

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
        //! I KNOW THAT THE TWO REQUESTS TO THE BASE ARE INCORRECT, BUT THE CODE WILL BE CORRECTED
        const responseRoles = await getAllRoles();
        const responseWorker = await getWorkerById({ workerId });

        out.workerData = responseWorker.data.data;
        out.rolesData = responseRoles.data.data.data;
    } catch (err) {
        out.status = 0;
        out.message = err.response.data.message;
    }

    return out;
};

export const workerEditAction = async ({ request, params }) => {
    const workerId = params.workerId;
    const response = { status: 1 };
    const formData = await request.formData();

    const workerData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        roleId: formData.get("roleId"),
    };

    console.log("workerData edit", workerData);
    console.log("workerId edit", workerId);

    try {
        await editWorker({ workerData: workerData, workerId: workerId });
    } catch (err) {
        response.status = 0;
        response.message = err.response.data.message;
        return response;
    }

    return redirect("../..");
};
