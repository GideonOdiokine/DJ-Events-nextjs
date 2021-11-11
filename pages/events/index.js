import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function EventsPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h2> Events</h2>
      {events.length === 0 && <h3>No events to show </h3>}
      {events.map((evt) => (
        <EventItem evt={evt} key={evt.id} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}