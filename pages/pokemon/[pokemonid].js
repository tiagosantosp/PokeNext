import Image from "next/image";

import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
  const maxPokemons = 251;

  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        pokemonid: (index + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonid;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  return (
    <div className="text-center ">
      <h1 className="text-4xl capitalize bg-gray-800 text-white px-1 py-4 m-auto w-80">{pokemon.name}</h1>
      <Image src={url3} height="200" width="200" alt={pokemon.name} />
      <div>
        <h3 className="my-2 mx-auto text-lg font-bold ">Número: </h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3 className="my-2 mx-auto text-lg font-bold">Tipo: </h3>
        <div className="flex items-center justify-center ">
          {pokemon.types.map((item, index) => (
            <span key={index} className={`py-2 px-4 mr-2 border border-solid border-gray-400 rounded-lg uppercase text-xs  text-white bg-black ${styles["type_" + item.type.name]}`}>
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="my-4 mx-0 py-0 px-4 flex flex-col border border-r-gray-300 border-y-0 border-l-0">
          <h4 className="font-bold">Altura: </h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className="my-4 mx-0 py-0 px-4 flex flex-col ">
          <h4 className="font-bold">Peso: </h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
