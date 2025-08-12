import { EventCard } from "./EventCard";
import { sampleEvents } from "@/data/sampleEvents";

export const EventGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-event-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing events happening near you and join communities that share your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              image={event.image}
              category={event.category}
              attendees={event.attendees}
              maxAttendees={event.maxAttendees}
              price={event.price}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-secondary transform hover:scale-105 transition-bounce">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};