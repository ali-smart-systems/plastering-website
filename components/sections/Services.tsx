import {
    FaPaintRoller,
    FaBuilding,
    FaHome,
    FaTools,
    FaHammer,
    FaShieldAlt,
} from "react-icons/fa";

const services = [
    {
        icon: <FaPaintRoller size={40} />,
        title: "لياسة داخلية",
        description: "تنفيذ جميع أعمال اللياسة الداخلية بدقة وجودة عالية.",
    },
    {
        icon: <FaBuilding size={40} />,
        title: "لياسة خارجية",
        description: "تشطيب الواجهات الخارجية بمظهر احترافي ومتين.",
    },
    {
        icon: <FaHome size={40} />,
        title: "تشطيب الفلل",
        description: "تشطيب كامل للفلل والمنازل وفق أعلى معايير الجودة.",
    },
    {
        icon: <FaTools size={40} />,
        title: "ترميم الجدران",
        description: "إصلاح الشقوق والتلف وإعادة الجدران إلى أفضل حال.",
    },
    {
        icon: <FaHammer size={40} />,
        title: "تجهيز الأسطح",
        description: "تهيئة الجدران والأسطح قبل أعمال الدهان أو التشطيب.",
    },
    {
        icon: <FaShieldAlt size={40} />,
        title: "ضمان الجودة",
        description: "استخدام مواد عالية الجودة مع الالتزام بالمواعيد.",
    },
];

export default function Services() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-4 text-center text-4xl font-extrabold">
                    خدماتنا
                </h2>

                <p className="mx-auto mb-14 max-w-3xl text-center text-gray-600">
                    نقدم جميع خدمات اللياسة والتشطيبات للمنازل والفلل والعمائر
                    باستخدام أفضل المواد وأحدث طرق التنفيذ.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-6 text-amber-600">
                                {service.icon}
                            </div>

                            <h3 className="mb-3 text-2xl font-bold">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-8">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}