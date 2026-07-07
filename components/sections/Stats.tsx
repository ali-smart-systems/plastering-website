"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaAward, FaClock } from "react-icons/fa";

const stats = [
    {
        icon: <FaBuilding size={40} />,
        number: "+1200",
        title: "مشروع مكتمل",
    },
    {
        icon: <FaUsers size={40} />,
        number: "+760",
        title: "عميل راضٍ",
    },
    {
        icon: <FaAward size={40} />,
        number: "+30",
        title: "سنوات خبرة",
    },
    {
        icon: <FaClock size={40} />,
        number: "24/7",
        title: "دعم واستجابة",
    },
];

export default function Stats() {
    return (
        <section className="bg-amber-600 py-16 text-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="mb-4 flex justify-center">
                            {item.icon}
                        </div>

                        <h3 className="text-5xl font-extrabold">
                            {item.number}
                        </h3>

                        <p className="mt-3 text-lg">
                            {item.title}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}