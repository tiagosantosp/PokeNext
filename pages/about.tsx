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
      className="flex flex-col w-full border border-gray-300  items-center justify-center space-y-4 m-auto"
      style={{ height: "85vh" }}
    >
      <div className="shadow-xl rounded-3xl w-10/12 flex flex-col bg-gray-100   items-center fundoHallOfFame pt-8 min-h-[400px]">
        <h1 className="font-bold text-5xl mb-4 ">
          <span className="goldGradient">Hall of Fame</span>
        </h1>
        <div className="flex flex-row  justify-evenly  w-full">
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
