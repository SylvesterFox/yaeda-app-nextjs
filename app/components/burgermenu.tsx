"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function BurgerMenu() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="ml-auto">
            <button onClick={toggleMenu} className="sm:hidden focus:outline-none fill-black text-black">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <ul className="lg:flex space-x-3 drop-shadow-lg text-[20px] hidden">
                <li><a href="#" className="text-white  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white hover:text-black">Стать курьером</a></li>
                <li><a href="#" className="text-white px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white hover:text-black">Преимущества</a></li>
                <li><a href="#" className="text-white  px-[15px] py-[10px] bg-[var(--color-element-background)] rounded-[30px] transition duration-500 hover:bg-white hover:text-black">FAQ</a></li>
            </ul>

            {/* Меню — мобильное */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 sm:hidden z-50 font-semibold text-gray-700">
                <li><a href="#">Стать курьером</a></li>
                <li><a href="#">Преимущества</a></li>
                <li><a href="#">FAQ</a></li>
                </ul>
            )}
        </nav>
    )
}