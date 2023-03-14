import styles from "./signin.module.css";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className={styles.signInSection}>
        <header className={styles.header}>
          <Image src="/images/logo.png" width="173" height="41" alt="Logo" />
          <span>
            Don’t have an account? <Link href="/signup">Sign up!</Link>
          </span>
        </header>

        <main className={styles.signInSectionMain}>
          <h1>Welcome Back!</h1>
          <h5>Login into your account</h5>
          <section></section>

          <section>
            <form
              action="/api/signin"
              method="post"
              className={styles.signInSectionMainForm}
            >
              <label for="login">Login:</label>
              <input type="text" id="login" name="login" />
              <label for="password">Password:</label>
              <input type="text" id="password" name="password" />
              <button type="submit">Submit</button>
            </form>
          </section>
        </main>
      </section>

      <aside className={styles.asideSection}>
        <Image
          src="/images/bg.png"
          className={styles.asideSectionBgImage}
          alt="Picture of 2 women talking to each other"
          fill
          quality={100}
        />

        <section className={styles.asideSectionInfo}>
          <h1 className={styles.asideSectionInfoTitle}>
            Affiliate Partnerships simplified
          </h1>
          <p className={styles.asideSectionInfoContent}>
            Connective is a chat app designed for businesses to form affiliate
            partnerships.
          </p>
        </section>
      </aside>
    </div>
  );
}
