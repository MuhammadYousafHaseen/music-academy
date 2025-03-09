"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-6 bg-gray-200 dark:bg-gray-900">
            {/* Meteor Effect Covering Entire Background */}
            <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-40 dark:opacity-30 pointer-events-none">
            <Meteors number={70} />
        </div>
            </div>

            {/* Contact Card (Placed Above Meteors) */}
            <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md">
                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Contact Us
                </h1>

                {/* Promotion Paragraph */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Start your musical journey with us! Reach out to learn more about our
                    courses and programs.
                </p>

                {/* Contact Form */}
                <form className="flex flex-col justify-center items-center space-y-4">
                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />

                    {/* Message Input */}
                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="relative w-52 px-6 py-3 font-semibold text-white bg-gradient-to-r 
                        from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-md 
                        border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 
                        hover:bg-gray-100 transition-all duration-300 ease-in-out"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
