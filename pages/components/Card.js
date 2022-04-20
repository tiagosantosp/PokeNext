import Image from 'next/image'
import Link from 'next/link';

const Card = ({pokemon}) => {
  const url = 'https://cdn.traction.one/pokedex/pokemon/'
  // const url2 = `https://images.gameinfo.io/pokemon-trimmed/120/p${pokemon.id}.webp`
  const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`

  return (
    <div className="flex justify-center items-center flex-col mb-8 py-4 rounded-3xl border border-solid border-red-500 shadow-black shadow-lg  bg-gray-800 text-white card">
      <Image 
        // src={`${url}${pokemon.id}.png`}
        src={`${url3}`}
        height="150"
        width="150"
        alt={pokemon.name}
      />
      <p className='my-4 bg-red-500 rounded-md py-1 px-2 flex justify-center items-center'>#{pokemon.id}</p>
      <h3 className='capitalize mb-4 text-2xl'>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-bold transition duration-500 hover:bg-red-500 hover:text-gray-300  '>Detalhes</a>
      </Link>
    </div>
  );
}
 
export default Card;