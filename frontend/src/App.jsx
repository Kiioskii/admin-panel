import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePgae";
import AuthenticationPage, { authAction } from "./pages/AuthenticationPage";
import AdminPanelPage, { AdminPanelLoader } from "./pages/AdminPanelPage";
import WorkersPanel, { loaderWorkers } from "./pages/AdminPanel/WorkersPanel";
import AddWorkerPanel from "./pages/AdminPanel/AddWorkerPanel";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/AdminPanel/Dashboard";

//ACTIONS
import { addWorker } from "./api/api";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                { index: true, element: <HomePage /> },
                { path: "auth", element: <AuthenticationPage />, action: authAction },
                {
                    path: "admin-panel",
                    element: <AdminLayout />,
                    children: [
                        { index: true, element: <Dashboard /> },
                        {
                            path: "users",
                            element: <UserLayout />,
                            // loader: loaderWorkers,
                            children: [
                                { index: true, element: <WorkersPanel /> },
                                { path: "add-new-user", element: <AddWorkerPanel />, action: addWorker },
                            ],
                        },
                    ],
                    // loader: AdminPanelLoader,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
