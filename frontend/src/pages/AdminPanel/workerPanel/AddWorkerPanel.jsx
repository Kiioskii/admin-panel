import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import { Form, useActionData, useNavigation, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddWorkerPanel = () => {
    const data = useActionData();
    const navigation = useNavigation();
    const [searchParams] = useSearchParams();
    const isSubmitting = navigation.state === "submitting";

    useEffect(() => {
        if (!data?.status) {
            toast.error(data?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [data]);

    return (
        <Form method="POST" className="sm:w-10/12 w-max mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 m-2">Dodaj nowego pracownika</h2>
            <div className="flex md:row-auto columns-1">
                <div className="m-3 w-1/2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Imię
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Wpisz imię"
                        required
                        className="mt-1 pl-3 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="m-3 w-1/2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nazwisko
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Wpisz nazwisko"
                        required
                        className="mt-1 pl-3 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="flex md:row-auto columns-1 mt-12 ">
                <div className="m-3 w-1/2">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Stanowisko
                    </label>
                    <select
                        id="role"
                        name="role"
                        required
                        className="mt-1 pl-3 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="employee">Pracownik</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="m-3 w-1/2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Wpisz email"
                        required
                        className="mt-1 block w-full pl-3 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <Button label={"Dodaj pracownika"} disabled={isSubmitting} />
            </div>
            <ToastContainer />
        </Form>
    );
};

export default AddWorkerPanel;
