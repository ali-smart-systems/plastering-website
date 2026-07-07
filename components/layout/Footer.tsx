import Link from "next/link";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">

            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

                <div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        معلم لياسة
                    </h3>

                    <p className="leading-8">
                        نقدم خدمات اللياسة الداخلية والخارجية والتشطيبات بأعلى
                        معايير الجودة والاحترافية.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-bold text-white">
                        روابط سريعة
                    </h3>

                    <ul className="space-y-3">
                        <li><Link href="/">الرئيسية</Link></li>
                        <li><Link href="/about">من نحن</Link></li>
                        <li><Link href="/services">الخدمات</Link></li>
                        <li><Link href="/gallery">معرض الأعمال</Link></li>
                        <li><Link href="/contact">اتصل بنا</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-bold text-white">
                        معلومات التواصل
                    </h3>

                    <div className="space-y-4">

                        <a
                            href="tel:+967774684128"
                            className="flex items-center gap-3 hover:text-white"
                        >
                            <FaPhoneAlt />
                            +967 774684128
                        </a>

                        <a
                            href="https://wa.me/967774684128"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-white"
                        >
                            <FaWhatsapp />
                            واتساب
                        </a>

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt />
                            صنعاء - اليمن
                        </div>

                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 py-6 text-center text-sm">
                © 2026 جميع الحقوق محفوظة | معلم لياسة
            </div>

        </footer>
    );
}