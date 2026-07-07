"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-white to-amber-50">
            <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

                {/* النص */}
                <div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700"
                    >
                        ⭐ خبرة طويلة في أعمال التلييس واللياسة
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl"
                    >
                        سند الرباحي
                        <br />
                        للتلييس واللياسة
                    </motion.h1>

                    <p className="mt-8 text-lg leading-9 text-gray-600">
                        متخصصون في أعمال التلييس واللياسة الداخلية والخارجية،
                        وتشطيب الواجهات والفلل والعمائر في جميع محافظات اليمن،
                        مع تركيز خاص على مأرب وشبوة وحريب وبيحان.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="tel:+967774684129"
                            className="flex items-center gap-3 rounded-xl bg-amber-600 px-7 py-4 font-bold text-white transition hover:bg-amber-700"
                        >
                            <FaPhoneAlt />
                            اتصل الآن
                        </a>

                        <a
                            href="https://wa.me/967774684129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700"
                        >
                            <FaWhatsapp />
                            واتساب
                        </a>

                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-600" />
                            جودة عالية
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-600" />
                            أسعار مناسبة
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-600" />
                            تنفيذ سريع
                        </div>

                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-600" />
                            التزام بالمواعيد
                        </div>

                    </div>

                </div>

                {/* الصورة */}

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    className="relative"
                >

                    <div className="absolute -inset-4 rounded-3xl bg-amber-200 blur-3xl opacity-40" />

                    <Image
                        src="/images/hero.jpg"
                        alt="معلم تلييس"
                        width={700}
                        height={700}
                        priority
                        className="relative rounded-3xl shadow-2xl"
                    />

                </motion.div>

            </div>
        </section>
    );
}