"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaPhoneAlt,
    FaWhatsapp,
} from "react-icons/fa";

const links = [
    { href: "/", title: "الرئيسية" },
    { href: "/about", title: "من نحن" },
    { href: "/services", title: "الخدمات" },
    { href: "/gallery", title: "معرض الأعمال" },
    { href: "/contact", title: "اتصل بنا" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 shadow backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

                <Link
                    href="/"
                    className="text-2xl font-extrabold text-amber-600"
                >
                    معلم التلييس
                </Link>

                <nav className="hidden items-center gap-8 lg:flex">
                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition hover:text-amber-600"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">

                    <a
                        href="https://wa.me/967774684128"
                        className="rounded-xl bg-green-600 px-4 py-3 text-white"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="tel:+967774684128"
                        className="rounded-xl bg-amber-600 px-4 py-3 text-white"
                    >
                        <FaPhoneAlt />
                    </a>

                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl lg:hidden"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {open && (
                <nav className="border-t bg-white lg:hidden">
                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block border-b px-6 py-4"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}