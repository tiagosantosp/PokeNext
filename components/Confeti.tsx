import { useEffect } from "react";
import ConfettiGenerator from 'confetti-js'

const Confeti = () => {

  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  
    return () => confetti.clear();
  }, []) // add the var dependencies or not

  return(
    <canvas id="my-canvas" className="fixed top-8  w-full h-full"></canvas>
  )
}

export default Confeti