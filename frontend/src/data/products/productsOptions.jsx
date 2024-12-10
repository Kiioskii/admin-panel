import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const productsOptionsBySource = [
    { id: 0, text: "Źródło", icon: <IoIosArrowDown /> },
    { id: 2, text: "Sklep", icon: <FaShoppingCart /> },
    { id: 1, text: "Facebook", icon: <FaFacebook /> },
    { id: 3, text: "Messenger", icon: <FaFacebookMessenger /> },
];

export const productsOptionsByStatus = [
    { id: 0, text: "Utworzone", icon: <IoIosArrowDown /> },
    { id: 2, text: "Do wysłania", icon: <IoIosArrowDown /> },
    { id: 1, text: "Otwarta paczka", icon: <IoIosArrowDown /> },
    { id: 3, text: "Wysłane", icon: <IoIosArrowDown /> },
    { id: 3, text: "Anulowane", icon: <IoIosArrowDown /> },
];
