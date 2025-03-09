'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpComingWebinars() {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
    
    return (
        <div className="w-full p-12 bg-gray-900">
            <div className="mas-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center"><h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                  <HoverEffect 
                  items={featuredWebinars.map(webinar =>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: `/webinars/${webinar.slug}`
                    }
                  ))}
                  />
                </div>
                <div className="mt-10 text-center">
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
                </div>
            </div>
        </div>
    )
}

export default UpComingWebinars
