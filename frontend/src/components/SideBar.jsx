import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");
    const [activeTeam, setActiveTeam] = useState("Heroicons");

    const menuItems = [
        { id: 1, name: "Pulpit", icon: <IoHomeOutline />, badge: "5" },
        { id: 2, name: "Messenger", icon: <AiOutlineMessage /> },
        { id: 3, name: "Zamówienia", icon: <CiViewList />, badge: "12" },
        { id: 4, name: "Produkty", icon: <IoShirtOutline />, badge: "20+" },
        { id: 5, name: "Klienci", icon: <AiOutlineTeam /> },
        { id: 6, name: "Raporty", icon: <FaChartBar /> },
        { id: 7, name: "Pracownicy", icon: <AiOutlineTeam />, to: "users" },
    ];

    const teams = [
        { id: 1, name: "Heroicons", initials: "H" },
        { id: 2, name: "Tailwind Labs", initials: "T" },
        { id: 3, name: "Workcation", initials: "W" },
    ];

    return (
        <div className="h-screen w-64 bg-white text-gray-800 border-r border-gray-200 flex flex-col z-10 sticky top-0">
            {/* Logo */}
            <div className="flex items-center justify-center h-16">
                {/* <span className="text-indigo-500 text-3xl font-bold">🌊</span> */}
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-4">
                {menuItems.map((item) => (
                    <NavLink to={item.to} key={item.id}>
                        <div
                            onClick={() => setActiveMenuItem(item.name)}
                            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                                activeMenuItem === item.name
                                    ? "bg-gray-100 text-indigo-500 font-medium"
                                    : "hover:bg-gray-50"
                            }`}
                        >
                            <div className="flex items-center">
                                <span className="text-xl">{item.icon}</span>
                                <span className="ml-3">{item.name}</span>
                            </div>
                            {item.badge && (
                                <span
                                    className={`${
                                        activeMenuItem === item.name ? "bg-white" : "bg-gray-100"
                                    } text-xs px-2 py-0.5 rounded-full`}
                                >
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    </NavLink>
                ))}

                {/* Teams Section */}
                <div className="mt-6">
                    <h3 className="text-gray-400 text-sm mb-2">Your teams</h3>
                    {teams.map((team) => (
                        <div
                            key={team.id}
                            onClick={() => setActiveTeam(team.name)}
                            className={`flex items-center p-3 rounded-lg cursor-pointer ${
                                activeTeam === team.name
                                    ? "bg-gray-100 text-indigo-500 font-medium"
                                    : "hover:bg-gray-50"
                            }`}
                        >
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                    activeTeam === team.name ? "bg-indigo-500 text-white" : "bg-gray-100"
                                }`}
                            >
                                {team.initials}
                            </div>
                            <span className="ml-3">{team.name}</span>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Profile Section */}
            <div className="flex items-center p-4 border-t border-gray-200">
                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                <span className="ml-3">Tom Cook</span>
            </div>
        </div>
    );
};

export default Sidebar;
