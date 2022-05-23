import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="  h-16  top-0 z-10   bg-gray-800  border border-t-black  flex justify-between items-center py-4 px-5  ">
         <div className="flex justify-center items-center">
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Logo Pokenext"
        />
        <h1 className="xs:text-xl text-3xl ml-4">PokeNext</h1>
      </div>
      <ul className="flex list-none">
        <li className="sm:mr-5">
          <Link href="/">
            <a className="text-white xs:text-sm p-2 transition-colors ease-in-out border-gray-800  hover:border-b-2 hover:border-white duration-300 ">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white xs:text-xs p-2 transition-colors ease-in-out border-gray-800  hover:border-b-2 hover:border-white duration-300 ">
              Hall of Fame
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
