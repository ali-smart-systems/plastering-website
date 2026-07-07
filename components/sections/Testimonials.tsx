import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "محمد العتيبي",
        city: "صنعاء",
        comment:
            "تم تنفيذ اللياسة باحترافية عالية، والالتزام بالمواعيد كان ممتازًا.",
    },
    {
        name: "أحمد القحطاني",
        city: "مارب",
        comment:
            "أفضل معلم لياسة تعاملت معه، العمل نظيف والجودة ممتازة.",
    },
    {
        name: "سعيد المطيري",
        city: "شبوة",
        comment:
            "النتيجة كانت أفضل من المتوقع، أنصح بالتعامل معهم.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-4 text-center text-4xl font-extrabold">
                    آراء عملائنا
                </h2>

                <p className="mx-auto mb-14 max-w-3xl text-center text-gray-600">
                    نفخر بثقة عملائنا ونسعى دائمًا لتقديم أفضل خدمة ممكنة.
                </p>

                <div className="grid gap-8 md:grid-cols-3">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:shadow-xl"
                        >
                            <div className="mb-5 flex text-amber-500">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar key={star} />
                                ))}
                            </div>

                            <p className="leading-8 text-gray-700">
                                "{item.comment}"
                            </p>

                            <div className="mt-6">
                                <h3 className="font-bold text-lg">
                                    {item.name}
                                </h3>

                                <span className="text-gray-500">
                                    {item.city}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}