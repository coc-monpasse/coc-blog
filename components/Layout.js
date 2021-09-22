import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}