import Image from 'next/image'

import Card from './components/Card'

export default function Home({pokemons}) {
  return (
    <>
      <div className='flex justify-center items-center mb-8'>
        <h1 className='text-3xl font-bold text-red-600 text-center mr-2'>
          Poke<span className='text-gray-800'>Next</span>
        </h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="Pokeball"/>
      </div>
      <div className='flex flex-wrap justify-between items-center max-w-7xl mx-auto'>
        {pokemons && pokemons.map((pokemon) => (<Card pokemon={pokemon} key={pokemon.id}/>) )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const maxPokemons = 251

  const api = 'https://pokeapi.co/api/v2/pokemon/'
  // const api2 = 'https://www.pokemon.com/br/api/pokedex/kalos'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })
  return {
    props: {
      pokemons: data.results
    }
  }
}
