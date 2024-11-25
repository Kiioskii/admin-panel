import { logIn, signUp } from "../api/api";
import { json, redirect } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const LogInPage = () => {
    return (
        <>
            <FormContainer />
        </>
    );
};

export default LogInPage;

export const authAction = async ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    if (mode !== "login" && mode !== "signup") {
        throw json({ message: "Unsupported mode." }, { status: 422 });
    }
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    let response;

    try {
        if (mode === "login") {
            response = await logIn(email, password);
        } else {
            response = await signUp(email, password);
        }
        console.log("res", response);
    } catch (err) {
        response = { status: 0, error: err.response.data.message };
        return response;
    }

    if (mode === "login") {
        const token = response.data.data.session.access_token;
        localStorage.setItem("token", token);
        console.log("reeeees", response);
        return redirect("/admin-panel");
    }
    return response;
};
