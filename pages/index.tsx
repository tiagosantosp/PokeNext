import Image from "next/image";
import { useState } from "react";

import Card from "../components/Card";

export default function Home({ pokemons }) {
  const [valor, setValor] = useState("");
  const [lista, setLista] = useState(pokemons);
  
  const limpar = () => {
    setLista(pokemons);
    setValor('')
  };

  const busca = (conteudo) => {
    const filtrado = pokemons.filter(
      (pokemon) => pokemon.name.toLowerCase().indexOf(conteudo) != -1
    );
    setLista(filtrado);
  };

  return (
    <div className=" flex flex-col mx-4">
      <div className="flex justify-center items-center w-screen mb-8 mt-8">
        <h1 className="text-3xl font-bold text-red-600 text-center mr-2">
          Poke<span className="text-gray-800">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokeball"
        />
      </div>

      <div className="flex justify-center mb-8">
        <input
          className="border border-gray-400 mr-4"
          type="text"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
        />
        <button
          className="bg-gray-500 rounded-lg mr-4 p-2"
          onClick={(v) => busca(valor)}
        >
          Busca
        </button>
        <button className="bg-gray-500 rounded-lg p-2" onClick={limpar}>
          Limpar
        </button>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 xs:w-screen   gap-5 ">
        {lista.length > 0
          ? lista.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />)
          : <h1 className="text-2xl mx-auto font-bold flex justify-center items-center">Não encontrado...</h1>}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const maxPokemons = 251;

  const api = "https://pokeapi.co/api/v2/pokemon/";
  // const api2 = 'https://www.pokemon.com/br/api/pokedex/kalos'

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  return {
    props: {
      pokemons: data.results,
    },
  };
}