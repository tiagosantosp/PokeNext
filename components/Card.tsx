import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {FaPlus, FaCheck} from 'react-icons/fa'
interface Pokemon{
  name: string
}

import styles from "../styles/Home.module.css";

const Card = ({ pokemon }) => {
  const [pkmAdd, setPkmAdd] = useState(false)
  const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const add = (pkm, event) => {
    event.preventDefault();
    let hf = localStorage.getItem("hallOfFame");
    let hallFame: string[] = [];

    if (hf) {
      
      hf = JSON.parse(hf);
      let hallFameAtualizado = Array.from(hf);

      let repetido = hallFameAtualizado.filter(
        (pokemon) => {
          let pkm2= pokemon  as unknown as Pokemon
          pkm2.name === pkm.name
        }
      );
      if (repetido.length === 0) {

        hallFameAtualizado.unshift(pkm);
        if (hallFameAtualizado.length > 6) {
          hallFameAtualizado.pop();
        }
        setPkmAdd(true)
        localStorage.setItem("hallOfFame", JSON.stringify(hallFameAtualizado));
      }
    } else {
      hallFame.push(pkm);
      localStorage.setItem("hallOfFame", JSON.stringify(hallFame));
    }
  };



  return (
    <Link href={`/pokemon/${pokemon.id}`}><a>
    <div className={`flex justify-center items-center flex-col mb-8  rounded-2xl border xs:w-screen border-solid border-red-500 shadow-black shadow-lg  bg-gray-800 text-white card transition hover:scale-105 ${styles["type__" + pokemon.type[0]]}`}>
      <div className="relative flex justify-start items-end w-full h-full">
        <p className=" absolute -top-4 text-lg my-4 bg-red-500  rounded-tl-xl rounded-br-xl py-1 px-2  flex justify-center items-center">
          <Image
              src="/images/pokeball.png"
              width="15"
              height="15"
              alt="Pokeball"
            />&nbsp;{pokemon.id}
        </p>
        <button 
          className=" absolute -top-4 right-0 text-lg my-4 bg-red-500  rounded-tr-xl rounded-bl-xl py-1 px-2  flex justify-center items-center"
          onClick={(event) => add(pokemon, event)}
        >
           {pkmAdd ? <FaCheck/>:<FaPlus /> }
        </button>
      </div>
      <div className=" bg-gray-400 bg-opacity-30 shadow-2xl rounded-xl mt-4">
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
    </div>
    </a></Link>
  );
};

export default Card;
