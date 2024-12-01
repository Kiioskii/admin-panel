import { Form, Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
const WorkerEditPanel = ({ WorkerData, rolesData }) => {
    console.log("WorkerData", WorkerData);
    console.log("rolesData", rolesData);
    const isSubmitting = navigation.state === "submitting";

    const [userData, setUserData] = useState(
        WorkerData
            ? {
                  firstName: WorkerData?.firstName,
                  lastName: WorkerData?.lastName,
                  email: WorkerData?.email,
                  role: WorkerData?.roleName,
              }
            : {}
    );

    // Obsługa zmiany danych w polach formularza
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
                        value={userData.firstName}
                        onChange={handleChange}
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
                        value={userData.lastName}
                        onChange={handleChange}
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
                        id="roleId"
                        name="roleId"
                        required
                        value={userData.roleId}
                        onChange={handleChange}
                        className="mt-1 pl-3 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        {rolesData &&
                            rolesData.map((item) => (
                                <option value={item.id} key={item.id}>
                                    {item.role}
                                </option>
                            ))}
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
                        value={userData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full pl-3 h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <Link to="../..">
                    <Button label={"Anuluj"} disabled={isSubmitting} variant="grey" />
                </Link>
                <Button label={"Zapisz dane pracownika"} disabled={isSubmitting} />
            </div>
        </Form>
    );
};

export default WorkerEditPanel;
