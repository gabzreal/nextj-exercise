import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import mystyle from "../styles/mystyle.module.css";
import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/about">
          <a>
            <h2 className={mystyle.textleft}>About Page</h2>
          </a>
        </Link>
        <div className={mystyle.bgcolor}>
          <h2>Home Page</h2>
          <Image src="/images/profile.png" alt="profile pic" />
          <br />
          Hello <span className={mystyle.colorred}>World!</span>
        </div>
        <p>This paragraph is styled with CSS.</p>
        <p>HTML and CSS comments are not shown in the output.</p>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
      </div>
    </>
  );
}
