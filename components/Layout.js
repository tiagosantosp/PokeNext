import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div className="h-screen flex flex-col">

      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <title>PokeNext</title>
      </Head>
      <Navbar/>
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  );
}
 
export default Layout;