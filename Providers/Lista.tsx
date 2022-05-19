import React, {createContext, useEffect, useState} from 'react'

type pokemonProps = {
  ThumbnailAltText: string
  ThumbnailImage: string
  abilities: string[]
  collectibles_slug:string
  detailPageURL: string
  featured: string
  height: number
  id: number
  name: string
  number: string
  slug: string
  type: string[]
  weakness: string[]
  weight: number
}

type PokemonContext = {
  listaPkm: pokemonProps[]
  addListaPkm: (poke: pokemonProps[]) => void
}

export const ListContext = createContext({} as PokemonContext)

export const ListProvider = (props) => {
  const [listaPkm, setListaPkm ] = useState<pokemonProps[]>([])

  function addListaPkm (poke: pokemonProps[]) {
    setListaPkm(poke)

    localStorage.setItem('hallOfFame', JSON.stringify(poke))
  }

  useEffect(() => {

    if (localStorage.getItem('hallOfFame') != null){
      let dados = localStorage.getItem('hallOfFame')
      const lista = converter(dados)   
      setListaPkm(lista)
    }
  },[])
  
  const converter = (poke: string)=> {
    const list :pokemonProps[] =  JSON.parse(poke)
    return list
  }

  return (
    <ListContext.Provider value={{listaPkm, addListaPkm}}>
      {props.children}
    </ListContext.Provider>
  )
}

export const useList = () => React.useContext(ListContext)