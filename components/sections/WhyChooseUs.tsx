import {
    FaCheckCircle,
    FaClock,
    FaMedal,
    FaUsers,
} from "react-icons/fa";

const features = [
    {
        icon: <FaMedal size={40} />,
        title: "جودة عالية",
        description: "تنفيذ جميع أعمال اللياسة وفق أعلى معايير الجودة والدقة.",
    },
    {
        icon: <FaClock size={40} />,
        title: "الالتزام بالمواعيد",
        description: "نسلم جميع المشاريع في الوقت المتفق عليه دون تأخير.",
    },
    {
        icon: <FaUsers size={40} />,
        title: "خبرة طويلة",
        description: "سنوات من الخبرة في تنفيذ المشاريع السكنية والتجارية.",
    },
    {
        icon: <FaCheckCircle size={40} />,
        title: "ضمان على التنفيذ",
        description: "نضمن جودة التنفيذ واستخدام أفضل المواد المتوفرة.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-center text-4xl font-extrabold">
                    لماذا تختارنا؟
                </h2>

                <p className="mx-auto mt-5 mb-14 max-w-3xl text-center text-gray-600">
                    نسعى دائمًا لتقديم أفضل خدمات اللياسة والتشطيبات بأعلى جودة
                    وبأفضل الأسعار مع الالتزام الكامل برضا العميل.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-5 flex justify-center text-amber-600">
                                {item.icon}
                            </div>

                            <h3 className="mb-3 text-2xl font-bold">
                                {item.title}
                            </h3>

                            <p className="leading-8 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}