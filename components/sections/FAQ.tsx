"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "ما هي المناطق التي تعملون فيها؟",
        answer:
            "نقدم خدماتنا في جميع محافظات اليمن مع تركيز خاص على مأرب، شبوة، حريب، وبيحان، ويمكننا تنفيذ المشاريع في مناطق أخرى حسب الاتفاق.",
    },
    {
        question: "هل توفرون معاينة للموقع؟",
        answer:
            "نعم، يمكن معاينة المشروع وتقديم عرض سعر مناسب حسب حجم العمل وموقعه.",
    },
    {
        question: "هل تستخدمون مواد ذات جودة عالية؟",
        answer:
            "نحرص على استخدام مواد عالية الجودة مع تنفيذ دقيق يضمن متانة اللياسة ومظهرًا احترافيًا.",
    },
    {
        question: "هل تنفذون اللياسة الداخلية والخارجية؟",
        answer:
            "نعم، ننفذ جميع أعمال التلييس واللياسة الداخلية والخارجية للمنازل والفلل والعمائر والأسوار.",
    },
    {
        question: "كيف أتواصل معكم؟",
        answer:
            "يمكنك الاتصال مباشرة على الرقم 774684128 أو التواصل عبر واتساب من خلال الأزرار الموجودة في الموقع.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-5xl px-6">

                <h2 className="text-center text-4xl font-extrabold">
                    الأسئلة الشائعة
                </h2>

                <p className="mt-5 mb-14 text-center text-gray-600">
                    أكثر الأسئلة التي يطرحها عملاؤنا.
                </p>

                <div className="space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="rounded-2xl bg-white shadow-md"
                        >

                            <button
                                onClick={() =>
                                    setOpen(open === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-right"
                            >

                                <span className="text-lg font-bold">
                                    {faq.question}
                                </span>

                                <FaChevronDown
                                    className={`transition ${open === index ? "rotate-180" : ""
                                        }`}
                                />

                            </button>

                            {open === index && (

                                <div className="border-t px-6 py-5 leading-8 text-gray-600">
                                    {faq.answer}
                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}