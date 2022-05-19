import React from 'react';
import { useList } from '../Providers/Lista';

import { useEffect, useState } from 'react';
import Card from '../components/Card';


const About = () => {
  const [hallOfFame, setHallOfFame] = useState([]);
  const { listaPkm } = useList()  
  
  useEffect(() => {
      const array = Array.from(listaPkm)
      setHallOfFame(array)
  }, [listaPkm])



  return (
    <div className='flex flex-col w-full border border-gray-300  items-center justify-center space-y-4 m-auto' style={{height: "85vh"}}>
      <h1 className='font-bold text-3xl'>Hall of Fame</h1>
      <div className='shadow-xl rounded-lg w-full flex flex-row bg-gray-100 justify-between items-center'>
      
      {hallOfFame && hallOfFame.map((pkm) => (
        <div key={pkm.id}>
          <Card key={pkm.id} pokemon={pkm}/>
        </div>
        ))}

      </div>
      
    </div>
  );
}
 
export default About;