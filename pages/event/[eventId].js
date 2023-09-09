// pages/event/[eventId].js
import Link from 'next/link';

// This is a placeholder for fetching event data.
const getEventDataById = async (eventId) =>
  // Replace with your data fetching logic to get event details by ID.
  // For example, you can fetch event data from an API or database.
   ({
    id: eventId,
    title: 'Sample Event',
    description: 'Event description goes here...',
    image: '/path/to/event-image.jpg',
  });
const EventDetails = ({ event }) => (
  <div>
    <div className="hero-image">
      <img src={event.image} alt={event.title} />
    </div>
    <div className="event-details">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <button>Reserve a Booth</button>
      <Link href="/">Back to Event List</Link>
    </div>
  </div>
  );

// Fetch event data and pass it to the component as props.
export async function getServerSideProps(context) {
  const {eventId} = context.query; // Extract the event ID from the URL
  const event = await getEventDataById(eventId);

  return {
    props: { event },
  };
}

export default EventDetails;
