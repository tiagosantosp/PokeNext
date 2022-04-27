import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Card = ({ pokemon }) => {
  const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const add = (pkm) => {
    let hf = localStorage.getItem("hallOfFame");
    let hallFame: string[] = [];

    if (hf) {
      hf = JSON.parse(hf);
      let hallFameAtualizado = Array.from(hf);

      let repetido = hallFameAtualizado.filter(
        (pokemon) => pokemon.name === pkm.name
      );
      if (repetido.length === 0) {
        hallFameAtualizado.unshift(pkm);
        if (hallFameAtualizado.length > 6) {
          hallFameAtualizado.pop();
        }

        localStorage.setItem("hallOfFame", JSON.stringify(hallFameAtualizado));
      }
    } else {
      hallFame.push(pkm);
      localStorage.setItem("hallOfFame", JSON.stringify(hallFame));
    }
  };

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
    <div className={`flex justify-center items-center flex-col mb-8  rounded-3xl border xs:w-screen border-solid border-red-500 shadow-black shadow-lg  bg-gray-800 text-white card transition hover:scale-105 ${styles["type__" + pokemon.type[0]]}`}>
      <div className="flex justify-start items-end w-full h-full">
      <p className="text-lg my-4 bg-red-500 rounded-md py-1 px-2 flex justify-center items-center">
        <Image
            src="/images/pokeball.png"
            width="15"
            height="15"
            alt="Pokeball"
          />&nbsp;{pokemon.id}
        </p>
      </div>
      <div className=" bg-gray-400 bg-opacity-30 shadow-2xl rounded-xl">
        <Image
          src={url3}
          height="150"
          width="150"
          alt={pokemon.name}
        />
      </div>
      <h3 className="capitalize mb-4 text-2xl">{pokemon.name}</h3>
      {/* <Link href={`/pokemon/${pokemon.id}`}>
        <a className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-bold transition duration-500 hover:bg-red-500 hover:text-gray-300  ">
          Detalhes
        </a>
      </Link> */}
      <div className="flex items-center justify-center mb-4">
        {pokemon.type.map((item, index) => (
          <span
            key={index}
            className={`py-2 px-4 mr-2 border border-solid border-gray-400 rounded-lg uppercase text-xs  text-white bg-black ${
              styles["type_" + item]
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      {/* <button className="p-1 bg-slate-300" onClick={() => add(pokemon)}>
        ADD
      </button> */}
    </div>
    </Link>
  );
};

export default Card;
