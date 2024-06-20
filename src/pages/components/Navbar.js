import styles from "./Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>

        <li>
          <Link to="/login">로그인</Link>
        </li>

        <li>
          <Link to="/signup">가입</Link>
        </li>

        <li>
          <button className="btn" onClick={logout}>
            로그아웃
          </button>
        </li>
      </ul>
    </nav>
  );
}
