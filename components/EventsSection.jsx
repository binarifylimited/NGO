import React from 'react'
import EventCard from './EventCard'
import { events } from '@/constants'

const EventsSection = () => {

  return (
    <section className="pb-[150px]">
        <div className="mx-auto flex flex-col text-center items-center justify-center w-fit">
            <p className="font-medium text-lg text-gray uppercase mb-5">Latest Events</p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-11 text-black">Find stories that inspire.</h1>
            <div className="lg:flex justify-between mx-auto container items-start gap-10 lg:gap-14">
                { events.map((event) => {
                    return (
                        <EventCard key={event.title} event={event} />
                    )
                }) }
            </div>
        </div>
    </section>
  )
}

export default EventsSection