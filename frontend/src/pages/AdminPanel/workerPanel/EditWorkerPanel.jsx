import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import WorkerEditPanel from "../../../components/WorkerEditPanel";
const EditWorkerPanel = () => {
    const loaderData = useLoaderData();
    console.log("loaderData", loaderData);

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={loaderData}>
                {({ workerData, rolesData }) => <WorkerEditPanel WorkerData={workerData} rolesData={rolesData} />}
            </Await>
        </Suspense>
    );
};

export default EditWorkerPanel;
