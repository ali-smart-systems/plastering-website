"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
    return (
        <>
            {/* زر الاتصال */}
            <a
                href="tel:+967774684128"
                className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-xl transition hover:scale-110 hover:bg-amber-700"
                aria-label="اتصل بنا"
            >
                <FaPhoneAlt size={22} />
            </a>

            {/* زر الواتساب */}
            <a
                href="https://wa.me/967774684128"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
                aria-label="واتساب"
            >
                <FaWhatsapp size={26} />
            </a>
        </>
    );
}