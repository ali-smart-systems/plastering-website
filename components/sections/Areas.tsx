import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
    "مأرب",
    "شبوة",
    "حريب",
    "بيحان",
    "عتق",
    "صنعاء",
    "عدن",
    "حضرموت",
    "ذمار",
    "إب",
    "تعز",
    "البيضاء",
];

export default function Areas() {
    return (
        <section className="bg-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-center text-4xl font-extrabold">
                    نخدم جميع محافظات اليمن
                </h2>

                <p className="mx-auto mt-5 mb-14 max-w-3xl text-center text-gray-600">
                    نصل إليكم أينما كنتم، مع تركيز خاص على مأرب وشبوة
                    وحريب وبيحان.
                </p>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {areas.map((area) => (
                        <div
                            key={area}
                            className="flex items-center gap-3 rounded-xl border p-5 shadow-sm"
                        >
                            <FaMapMarkerAlt className="text-amber-600" />

                            {area}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}