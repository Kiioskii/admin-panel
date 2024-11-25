import { addWorker } from "../api/api";

export const addWorkerAction = async ({ request }) => {
    let response;
    const formData = await request.formData();

    const workerData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        role: formData.get("role"),
        password: formData.get("password"),
        repeatPassword: formData.get("repeatPassword"),
    };

    try {
        if (workerData.password !== workerData.repeatPassword) {
            throw Error("Powtórzone hasło jest inne");
        }

        const apiResponse = await addWorker(workerData);

        console.log("apiResponse", apiResponse);
    } catch (err) {
        response = { status: 0, error: err.response.data.message };
        return response;
    }

    return response;
};
