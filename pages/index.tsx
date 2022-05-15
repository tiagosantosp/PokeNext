import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import Card from "../components/Card";


export default function Home({ pokemons }) {
  const [valor, setValor] = useState("");
  const [qtdPkm, setQtdPkm] = useState(20);
  const [visible, setVisible] = useState(false);

  const novo = useRef()

  const page = (pokemons) => {
    const pkmAtual = pokemons.filter(pkm => pkm.id < qtdPkm);
    return pkmAtual
  }
  const [lista, setLista] = useState(page(pokemons));
  
  const limpar = () => {
    setLista(page(pokemons));
    setValor('')
  };

  const busca = (conteudo: string) => {
    const filtrado = pokemons.filter(
      (pokemon) => pokemon.name.toLowerCase().indexOf(conteudo.toLowerCase()) != -1
    );
    setLista(filtrado);
  };


  useEffect(()=> {
    if (visible) {
      setQtdPkm(qtdPkm + 20)
      setLista(page(pokemons))
    }
    
  }, [visible])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
      const entry = entries[0]
      setVisible(entry.isIntersecting)

    } )
    observer.observe(novo.current)
    return () => observer.disconnect()
  }, [])

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

      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 xs:w-screen   gap-10 ">
        {lista.length > 0
          ? lista.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />)
          : <h1 className="text-2xl mx-auto font-bold flex justify-center items-center">Não encontrado...</h1>}
      </div>
      {lista && <div ref={novo} >.</div>}      
    </div>
  );
}

export async function getStaticProps() {
  const maxPokemons = 251;

  //const api = "https://pokeapi.co/api/v2/pokemon/";
   const api2 = 'https://www.pokemon.com/br/api/pokedex/kalos'

  const res = await fetch(api2);
  const data = await res.json();
  let anterior: number = 0;
  const dados = data.filter((pkm) => {
    if (pkm.id !== anterior)  {
      anterior = pkm.id
      return pkm
    }
  })
  return {
    props: {
      pokemons: dados,
    },
    revalidate: 60 * 10,
  };
}
