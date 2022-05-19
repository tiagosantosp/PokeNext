import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {FaPlus, FaCheck} from 'react-icons/fa'
import { useList } from "../Providers/Lista";



import styles from "../styles/Home.module.css";

const Card = ({ pokemon }) => {
  const [pkmAdd, setPkmAdd] = useState(false)
  const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  const { listaPkm, addListaPkm } = useList()  


  const add = (pkm, event) => {
    event.preventDefault();
    console.log(listaPkm)
    if (listaPkm.length > 0) {
      
      let repetido = listaPkm.filter(
        (pokemon) => pokemon.name === pkm.name
      )
      console.log(repetido)
      if (repetido.length === 0) {
           let poke = listaPkm
           poke.unshift(pkm);
           if (poke.length > 6) {
              poke.pop();
           }
           setPkmAdd(true)
           addListaPkm(poke)
           localStorage.setItem('hallOfFame', JSON.stringify(poke))
      }
    } else {
      setPkmAdd(true)
      let list = []
      list.push(pkm)
      addListaPkm(list)
    }
  };

  const teste = (pkm) => {
    if (listaPkm.length > 0){
      let repetido = listaPkm.filter(
        (pokemon) => pokemon.name === pkm.name
      )
      if (repetido.length > 0) {
        return true
      } else {
        return false
      }
    }
    return false
  }


 


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
           {teste(pokemon) ? <FaCheck className="text-green-500 text-2xl "/>:<FaPlus className="text-2xl " /> }
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
      <h3  className="capitalize mb-4 text-2xl">{pokemon.name}</h3>
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
