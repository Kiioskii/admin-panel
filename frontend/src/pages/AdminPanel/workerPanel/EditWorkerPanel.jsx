import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import WorkerEditPanel from "../../../components/WorkerEditPanel";
const EditWorkerPanel = () => {
    const loaderData = useLoaderData();
    const workerData = loaderData.data;

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={workerData}>{(workerData) => <WorkerEditPanel WorkerData={workerData} />}</Await>
        </Suspense>
    );
};

export default EditWorkerPanel;
