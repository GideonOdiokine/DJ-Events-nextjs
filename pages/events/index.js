import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const PER_PAGE = 2;
export default function EventsPage({ events }) {
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

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total Event
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = totalRes.json();

  // Fetch Events
  const res = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await res.json();

  return {
    props: { events, page: +page, total },
  };
}
