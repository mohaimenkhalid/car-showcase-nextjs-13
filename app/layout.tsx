import "./globals.css";
import  type {Metadata} from 'next'
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
    title: "Home page",
    description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <body className='relative'>
        {/*<NavBar />*/}
        <h1>Home Page navbar</h1>
        {children}
        {/*<Footer />*/}
        </body>
        </html>
    );
}
