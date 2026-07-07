"use client";

import Image from "next/image";

const works = [
    {
        image: "/images/work1.webp",
        title: "لياسة داخلية",
    },
    {
        image: "/images/work2.webp",
        title: "لياسة خارجية",
    },
    {
        image: "/images/work3.webp",
        title: "تشطيب فيلا",
    },
    {
        image: "/images/work4.webp",
        title: "تشطيب عمارة",
    },
    {
        image: "/images/work5.webp",
        title: "لياسة أسوار",
    },
    {
        image: "/images/work6.webp",
        title: "تشطيب واجهات",
    },
];

export default function Gallery() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
                        معرض الأعمال
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold">
                        بعض أعمالنا
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 leading-8">
                        نفخر بتنفيذ العديد من مشاريع التلييس واللياسة
                        للمنازل والفلل والعمائر في مختلف المناطق.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div className="overflow-hidden">

                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={1200}
                                    height={900}
                                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {work.title}
                                </h3>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}