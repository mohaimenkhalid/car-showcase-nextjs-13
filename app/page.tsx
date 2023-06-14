import Hero from "@/components/Hero";
import styles from './page.module.css'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Main body home page</h2>
       <h3>
           <Link href="/about">About page</Link>
       </h3>
        <h3>
            <Link href="/products">Product List</Link>
        </h3>
      {/*<Hero />*/}
    </main>
  )
}
