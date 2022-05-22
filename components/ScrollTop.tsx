import { useWindowScroll } from "react-use";

import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const {y: pageYOffset} = useWindowScroll();
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true)
    } else {
      setVisible(false) 
    }
  },[pageYOffset])

  
  const subir = () =>  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) {
    return <span></span>
  }
  return (
    <div className="fixed right-4 bottom-4">
      <button
        className="bg-slate-500 rounded-3xl text-white p-3 animate-bounce"
        onClick={subir}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollTop;
