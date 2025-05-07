import { CheckCircle } from "lucide-react"

export default function Reasons() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Pacific Tax Service</h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left ml-4">
                                With over 30 years of experience, we provide reliable and professional tax services
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                        <div className="flex items-start gap-4 border-gray-300 border rounded-md p-6 shadow-md cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:border-gray-400 active:-translate-y-1">
                            <div className="mt-1 text-emerald-600">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Experienced Professionals</h3>
                                <p className="text-gray-500 mt-1">
                                    Our team of tax experts has decades of combined experience in tax preparation and planning.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-gray-300 border rounded-md p-6 shadow-md cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:border-gray-400 active:-translate-y-1">
                            <div className="mt-1 text-emerald-600">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Personalized Service</h3>
                                <p className="text-gray-500 mt-1">
                                    We take the time to understand your unique situation and provide tailored solutions.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-gray-300 border rounded-md p-6 shadow-md cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:border-gray-400 active:-translate-y-1">
                            <div className="mt-1 text-emerald-600">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Year-Round Availability</h3>
                                <p className="text-gray-500 mt-1">
                                    We&apos;re here for you beyond tax season, providing support and guidance throughout the year.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-gray-300 border rounded-md p-6 shadow-md cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:border-gray-400 active:-translate-y-1">
                            <div className="mt-1 text-emerald-600">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Maximum Refunds</h3>
                                <p className="text-gray-500 mt-1">
                                    We work diligently to ensure you receive every deduction and credit you&apos;re entitled to.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};