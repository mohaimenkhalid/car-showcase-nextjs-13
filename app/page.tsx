import Hero from "@/components/Hero";
import styles from './page.module.css'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Main body home page</div>
        <Link href="/about">About page ---></Link>
      {/*<Hero />*/}
    </main>
  )
}
