import Image from "next/image";

export default function BeforeAfter() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">
                    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
                        شاهد الفرق
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold text-gray-900">
                        الفرق قبل وبعد التلييس
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                        نهتم بأدق التفاصيل لنحول الجدران والأسطح من مرحلة البناء الخام
                        إلى تشطيب متقن يمنح المبنى مظهرًا جماليًا وعمرًا أطول.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                        <Image
                            src="/images/before.webp"
                            alt="الجدار قبل التلييس"
                            width={1200}
                            height={900}
                            className="h-[420px] w-full object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-red-600">
                                قبل التلييس
                            </h3>

                            <p className="mt-3 leading-8 text-gray-600">
                                جدار في مرحلة البناء قبل تنفيذ أعمال التلييس،
                                يحتاج إلى تسوية وتجهيز للحصول على تشطيب احترافي.
                            </p>
                        </div>

                    </div>

                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                        <Image
                            src="/images/after.webp"
                            alt="الجدار بعد التلييس"
                            width={1200}
                            height={900}
                            className="h-[420px] w-full object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-green-600">
                                بعد التلييس
                            </h3>

                            <p className="mt-3 leading-8 text-gray-600">
                                تم تنفيذ التلييس باحترافية عالية،
                                مع نعومة السطح واستقامة الزوايا وجاهزية الجدران للدهان.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}