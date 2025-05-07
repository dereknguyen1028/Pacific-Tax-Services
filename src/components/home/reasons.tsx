import { Award, Users, Clock, DollarSign } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";

export default function Reasons() {
    return (
        <>
            <section className="w-full bg-white py-12 md:py-24 lg:py-32">
                <div className="px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">Why Choose Pacific Tax Service</h2>
                            <p className="mx-auto ml-4 max-w-[700px] text-left text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">With over 30 years of experience, we provide reliable and professional tax services</p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="flex cursor-pointer items-start gap-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-2 hover:border-gray-300 hover:shadow-md active:-translate-y-1">
                                    <div className="mt-1 text-emerald-600">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Experienced Professionals</h3>
                                        <p className="mt-1 text-gray-600">Our team of tax experts has decades of combined experience in tax preparation and planning.</p>
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900">Expert Team</h4>
                                    <p className="text-sm text-gray-600">Our certified tax professionals stay up-to-date with the latest tax laws and regulations to provide you with the best service possible.</p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="flex cursor-pointer items-start gap-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-2 hover:border-gray-300 hover:shadow-md active:-translate-y-1">
                                    <div className="mt-1 text-emerald-600">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Personalized Service</h3>
                                        <p className="mt-1 text-gray-600">We take the time to understand your unique situation and provide tailored solutions.</p>
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900">Tailored Approach</h4>
                                    <p className="text-sm text-gray-600">We believe in building long-term relationships with our clients, understanding their specific needs and goals to provide personalized tax strategies.</p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="flex cursor-pointer items-start gap-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-2 hover:border-gray-300 hover:shadow-md active:-translate-y-1">
                                    <div className="mt-1 text-emerald-600">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Year-Round Availability</h3>
                                        <p className="mt-1 text-gray-600">We&apos;re here for you beyond tax season, providing support and guidance throughout the year.</p>
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900">Always Available</h4>
                                    <p className="text-sm text-gray-600">Whether you need help with tax planning, have questions about deductions, or need assistance with tax-related issues, we&apos;re here to help year-round.</p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="flex cursor-pointer items-start gap-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-2 hover:border-gray-300 hover:shadow-md active:-translate-y-1">
                                    <div className="mt-1 text-emerald-600">
                                        <DollarSign className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Maximum Refunds</h3>
                                        <p className="mt-1 text-gray-600">We work diligently to ensure you receive every deduction and credit you&apos;re entitled to.</p>
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900">Optimize Your Returns</h4>
                                    <p className="text-sm text-gray-600">Our thorough review process ensures we identify all eligible deductions and credits, helping you maximize your tax refund while staying compliant with tax laws.</p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
            </section>
        </>
    );
}
