import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div className="flex flex-col flex-grow">
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