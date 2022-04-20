import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-5 mb-8 bg-gray-800 text-white">
      <div className="flex justify-center items-center">
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Logo Pokenext"
        />
        <h1 className="text-3xl ml-4">Pokenext</h1>
      </div>
      <ul className="flex list-none">
        <li className="mr-5">
          <Link href="/">
            <a className="text-white p-2 transition-colors ease-in-out border-gray-800  hover:border-b-2 hover:border-white duration-300 ">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white p-2 transition-colors ease-in-out border-gray-800  hover:border-b-2 hover:border-white duration-300 ">
              Sobre
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
