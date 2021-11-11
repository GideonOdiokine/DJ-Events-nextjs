import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import router, { useRouter } from "next/router";


export default function EventPage({ evt }) {

  const deleteEvent = async (e) => {

    if (confirm("are you sure")) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: "DELETE",
      })
      const data = res.json();
      if (!res.ok) {
        toast.error(data.message)
      } else {
        toast.success("Event has been deleted")
        router.push('/events')
      }
    }

  };
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`events/edit/${evt.id}`}>
            <a>Edit Event</a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            Delete Event
          </a>
        </div>
        <ToastContainer />
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={
                evt.image
                  ? evt.image.formats.medium.url
                  : "/images/event-default.png"
              }
              width={960}
              height={600}
            />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Decription</h3>
        <p>{evt.description}</p>
        <p>Venue: {evt.venue}</p>
        <p>{evt.address}</p>
        <Link href="/events">
          <a className={styles.back}>Go back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
  };
}
