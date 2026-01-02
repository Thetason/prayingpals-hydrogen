import { json, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';

export async function loader({ context }: LoaderFunctionArgs) {
    return json({});
}

export default function Contact() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
                <h1 className="text-3xl font-serif text-[#4A3828] mb-2">Contact Us</h1>
                <p className="text-gray-600 mb-8">
                    궁금한 점이 있으신가요? 편하게 메시지를 남겨주세요.
                </p>

                {/* 
          Native Shopify Form Submission Workaround 
          - Posts directly to the Online Store URL
          - Triggers standard Shopify Admin notifications
        */}
                <form
                    method="post"
                    action="https://prayingpals.myshopify.com/contact"
                    acceptCharset="UTF-8"
                    className="space-y-6"
                >
                    <input type="hidden" name="form_type" value="contact" />
                    <input type="hidden" name="utf8" value="✓" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="ContactFormName" className="block text-sm font-medium text-gray-700"> Name </label>
                            <input
                                type="text"
                                id="ContactFormName"
                                name="contact[name]"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent outline-none transition-all"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="ContactFormEmail" className="block text-sm font-medium text-gray-700"> Email </label>
                            <input
                                type="email"
                                id="ContactFormEmail"
                                name="contact[email]"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent outline-none transition-all"
                                placeholder="email@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ContactFormPhone" className="block text-sm font-medium text-gray-700"> Phone Number </label>
                        <input
                            type="tel"
                            id="ContactFormPhone"
                            name="contact[phone]"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent outline-none transition-all"
                            placeholder="010-1234-5678"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ContactFormMessage" className="block text-sm font-medium text-gray-700"> Message </label>
                        <textarea
                            rows={6}
                            id="ContactFormMessage"
                            name="contact[body]"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent outline-none transition-all resize-none"
                            placeholder="자유롭게 문의 내용을 적어주세요."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#4A3828] text-white font-bold py-4 rounded-xl hover:bg-[#3A2818] transition-colors shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
