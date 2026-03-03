import Hero from '@/components/layout/Hero'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className=' py-16 flex-1 max-w-[1556px] bg-[#1c1917] mx-auto px-8'>
      <Hero title={'Work Experience'} />
      <div className='grid grid-cols-1 md:grid-cols-2 bg-'>
        <div>
          <div className='w-full max-w-3xs rounded-full overflow-hidden mx-auto'>
            <Image src={'/myimage.jpg'} alt='my image' width={1000} height={1000} />

          </div>
        </div>
        <div>
          <div className='text-gray-300 text-sm flex justify-between'>
            <h4>Integriti</h4>
            <h4>Aug 2025 - Dec 2025</h4>
          </div>
          <div className='text-white'>
            <h1 className='text-xl font-bold'>Software Engineer Trainee</h1>
            <ul className='text-xs text-gray-300 list-disc'>
              <li> Developed responsive frontends using Next.js and Tailwind CSS for a staffing and recruitment platform.</li>
              <li>Contributed to the development of a full-stack CRM system with Node.js, Express, PostgreSQL, Next.js,
                and TypeScript.
              </li>
              <li> Collaborated with cross-functional teams to deliver secure and modular solutions.
              </li>
              <li>Worked on a Vehicle Booking System integrating Stripe payments and AWS S3 for inspection file storage.</li>
              <li>Used Git for version control and collaborative development within the team.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
