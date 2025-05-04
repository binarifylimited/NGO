import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventCard = ({ event }) => {
  return (
    <div className="text-left sm:mb-5">
        <Image src={event.imgUrl} className="w-full mb-6" width={500} height={500} alt="Image" />
        <Link href={event.link}  className="text-2xl font-bold text-black mb-[17px] hover:text-primary">{event.title}</Link>
        <h2 className="text-lg mt-3 font-bold text-primary">{event.date}</h2>
        <p className="font-normal text-xl lg:text-2xl my-5 lg:my-10 text-gray">{event.description}</p>
        <Link href={event.link} className="text-xl underline font-bold hover:text-secondary">Learn more</Link>
    </div>
  )
}

export default EventCard