import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <title>PokeNext</title>
      </Head>
      <Navbar/>
      <main className=" fundo">{children}</main>
      <Footer/>
    </div>
  );
}
 
export default Layout;