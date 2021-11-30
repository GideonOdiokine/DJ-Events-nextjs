import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import styles from "@/styles/Header.module.css";
import AuthContext from "@/context/AuthContext";
import Search from "./Search";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DJ EVENT</Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/events/add">Add Event</Link>
              </li>
              <li>
                <Link href='/account/dashboard'>Dashboard</Link>
              </li>
              <li>
                <button onClick={() => logout()} className="btn-secondary btn-icons" >< FaSignOutAlt />Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
