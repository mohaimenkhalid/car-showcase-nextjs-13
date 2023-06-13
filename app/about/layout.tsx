import React from 'react';
import styles from "./about.module.css"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <main className={styles.main}>
                <nav>About nav</nav>
                {children}
            </main>
        </>
    );
}