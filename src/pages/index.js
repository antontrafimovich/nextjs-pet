import { useAppStore, withAuthGuard } from "@/app";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { PacmanLoader } from "react-spinners";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

export default withAuthGuard(function Main() {
  return (
    <>
      <Head>
        <title>Connective</title>
        <meta name="description" content="Connective app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>This is the content</main>
    </>
  );
});
