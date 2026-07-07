import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="bg-amber-600 py-24 text-white">
            <div className="mx-auto max-w-4xl px-6 text-center">

                <h2 className="text-4xl font-extrabold">
                    هل تبحث عن معلم لياسة محترف؟
                </h2>

                <p className="mt-6 text-lg leading-9">
                    اتصل بنا الآن للحصول على استشارة مجانية وعرض سعر مناسب لمشروعك.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    <a
                        href="tel:+967774684128"
                        className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-amber-700 transition hover:scale-105"
                    >
                        <FaPhoneAlt />
                        اتصل الآن
                    </a>

                    <a
                        href="https://wa.me/967774684128"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
                    >
                        <FaWhatsapp />
                        واتساب
                    </a>

                </div>

            </div>
        </section>
    );
}