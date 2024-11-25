import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";

// Rejestracja komponentów Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Dashboard = () => {
    // Przykładowe dane statystyczne
    const stats = [
        { label: "Użytkownicy", value: "1,245", change: "+15%" },
        { label: "Zamówienia", value: "312", change: "+8%" },
        { label: "Przychód", value: "12,345 PLN", change: "+22%" },
        { label: "Odwiedziny", value: "7,451", change: "+5%" },
    ];

    // Dane do wykresów
    const barData = {
        labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec"],
        datasets: [
            {
                label: "Sprzedaż (PLN)",
                data: [5000, 7000, 8000, 6000, 7500, 9000],
                backgroundColor: "rgba(59, 130, 246, 0.8)",
            },
        ],
    };

    const lineData = {
        labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"],
        datasets: [
            {
                label: "Odwiedziny",
                data: [120, 200, 150, 170, 300, 250, 400],
                borderColor: "rgba(16, 185, 129, 0.8)",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

            {/* Sekcja statystyk */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <p className="text-gray-500">{stat.label}</p>
                        <h2 className="text-2xl font-bold">{stat.value}</h2>
                        <p className="text-green-500">{stat.change}</p>
                    </div>
                ))}
            </div>

            {/* Sekcja wykresów */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Wykres słupkowy */}
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Sprzedaż miesięczna</h3>
                    <Bar data={barData} />
                </div>

                {/* Wykres liniowy */}
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Odwiedziny tygodniowe</h3>
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
