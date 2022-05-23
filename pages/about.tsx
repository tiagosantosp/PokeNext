import React from "react";
import { useList } from "../Providers/Lista";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import Confeti from "../components/Confeti";

const About = () => {
  const [hallOfFame, setHallOfFame] = useState([]);
  const { listaPkm } = useList();

  useEffect(() => {
    const array = Array.from(listaPkm);
    setHallOfFame(array);
  }, [listaPkm]);

  return (
    <div
      className="flex flex-col w-full h-full md:h-screen   items-center justify-center space-y-4  mt-8"
    >
      <div className=" shadow-xl rounded-3xl w-10/12 flex flex-col  bg-indigo-100   items-center fundoHallOfFame pt-8 min-h-[400px]">
        <h1 className="font-bold xs:text-3xl text-5xl mb-4 ">
          <span className="goldGradient">Hall of Fame</span>
        </h1>
        <div className="flex md:flex-row md:flex-wrap md:gap-x-8 lg:flex-nowrap xs:flex-col sm:flex-col justify-evenly  w-full mb-16">
          {hallOfFame &&
            hallOfFame.map((pkm) => (
              <div key={pkm.id}>
                <Card key={pkm.id} pokemon={pkm} />
              </div>
            ))}
        </div>
      </div>
      <Confeti />
    </div>
  );
};

export default About;
