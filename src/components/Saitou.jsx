import { useState } from "react";

function Saitou() {
  const [state, setState] = useState(false);
  const toggleState = () => {
    if (state) setState(false);
    else {
      setState(true);
    }
  };

  return (
    <div className="Saitou">
      <img
        onClick={toggleState}
        src="/images/h2_image.PNG"
        alt=""
        className={`${state ? "af_Saitou" : ""} gsap-img`}
      />
      <img
        onClick={toggleState}
        className={`${state ? "" : "af_Saitou"}`}
        src="/images/bfaf1.png"
        alt=""
      />
    </div>
  );
}

export default Saitou;
