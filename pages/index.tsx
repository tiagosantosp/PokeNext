import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaBackspace, FaArrowUp } from "react-icons/fa";

import Card from "../components/Card";
import ScrollTop from "../components/ScrollTop";

export default function Home({ pokemons }) {
  const [valor, setValor] = useState("");
  const [qtdPkm, setQtdPkm] = useState(20);
  const [visible, setVisible] = useState(false);
  const [buscando, setBuscando] = useState(true);

  const novo = useRef();

  const page = (pokemons) => {
    const pkmAtual = pokemons.filter((pkm) => pkm.id < qtdPkm);
    return pkmAtual;
  };
  const [lista, setLista] = useState(page(pokemons));

  const limpar = () => {
    setBuscando(true);
    setLista(page(pokemons));
    setValor("");
  };

  const busca = (conteudo: string) => {
    setBuscando(false);
    const filtrado = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().indexOf(conteudo.toLowerCase()) != -1
    );
    setLista(filtrado);
  };

  useEffect(() => {
    if (visible === true) {
      setQtdPkm(qtdPkm + 20);
      setLista(page(pokemons));
    }
  }, [visible]);

  useEffect(() => {
    console.log("buscando");
    console.log(buscando);
    if (buscando === true) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting );
      });
      observer.observe(novo.current);
      return () => observer.disconnect();
    }
  }, [buscando]);

  return (
    <div className=" flex flex-col mx-4">
      {/* LOGO */}
      <div className="flex justify-center items-center mb-8 mt-8">
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

      {/* MENU DE BUSCA */}
      <div className="flex justify-center mb-8 h-10">
        <input
          className="bg-gray-100 border border-red-400 mr-4 rounded-lg  "
          type="text"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
        />
        <button
          className="flex items-center text-white bg-gray-500 rounded-lg mr-4  p-2  hover:border hover:border-red-400"
          onClick={(v) => busca(valor)}
        >
          <FaSearch className="text-lg mr-2" />
          Buscar
        </button>
        <button
          className=" flex items-center text-white  bg-gray-500 rounded-lg  p-2 hover:border hover:border-red-400 "
          onClick={limpar}
        >
          <FaBackspace className="text-xl mr-2" />
          Limpar
        </button>
      </div>

      {/* CARDS DE POKEMON */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 xs:w-screen   gap-10 ">
        {lista.length > 0 ? (
          lista.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />)
        ) : (
          <h1 className="text-2xl mx-auto font-bold flex justify-center items-center">
            Não encontrado...
          </h1>
        )}
      </div>

      {/* LOADING INFERIOR */}
      {buscando && (
        <div ref={novo} className="flex justify-center">
          <Image
            src="/images/Spinner-1s-200px.svg"
            width="150"
            height="150"
            alt="spinner"
          />
        </div>
      )}

      {/* SETA PARA SCROLL TOP  */}
      <ScrollTop />
    </div>
  );
}

export async function getStaticProps() {
  const maxPokemons = 251;

  //const api = "https://pokeapi.co/api/v2/pokemon/";
  const api2 = "https://www.pokemon.com/br/api/pokedex/kalos";

  const res = await fetch(api2);
  const data = await res.json();
  let anterior: number = 0;
  const dados = data.filter((pkm) => {
    if (pkm.id !== anterior) {
      anterior = pkm.id;
      return pkm;
    }
  });
  return {
    props: {
      pokemons: dados,
    },
    revalidate: 60 * 10,
  };
}
