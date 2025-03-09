'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    description: string,
    slug: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className="w-full py-12 bg-gray-900  dark:text-white">
            <div>
                <div className="text-center"><h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white">Learn With the Best</p>
                </div></div>
            <div className="mt-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center ">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
                            >
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}
                                        className="mt-auto relative inline-block px-6 py-3 font-semibold text-transparent bg-clip-text 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             rounded-lg shadow-md border border-gray-300 
             dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 
             hover:bg-gray-100 transition-all duration-300 ease-in-out 
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-blue-500 before:via-purple-500 before:to-pink-500 
             before:opacity-20 before:rounded-lg before:-z-10"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link
                    href="/courses"
                    className="relative inline-block px-6 py-3 font-semibold text-transparent bg-clip-text 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             rounded-lg shadow-md border border-gray-300 
             dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 
             hover:bg-gray-100 transition-all duration-300 ease-in-out 
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-blue-500 before:via-purple-500 before:to-pink-500 
             before:opacity-20 before:rounded-lg before:-z-10"
                >
                    View All Courses
                </Link>

                {/* <Link href={"/courses"}
        className="bg-white  text-black  border-neutral-200 px-4 py-2 rounded  hover:bg-gray-100 transition-all duration-300 ease-in-out"
        >View All Courses</Link> */}
            </div>
        </div>
    )
}

export default FeaturedCourses
