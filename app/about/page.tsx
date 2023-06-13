import React from 'react';
import Link from "next/link";
export const metadata = {
    title: "About page",
    description: "Discover world's best car showcase application",
};

const AboutPage = () => {
    // throw new Error('Not today!!!')
    return (
        <div>
            <h1>About page...</h1>

            <Link href="/">----Back to home</Link>
        </div>
    );
};

export default AboutPage;