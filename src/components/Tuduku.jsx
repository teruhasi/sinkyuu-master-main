import { useState } from "react";

function Tuduku() {
  const [state, setState] = useState(false);
  const toggleState = () => {
    if (state) setState(false);
    else {
      setState(true);
    }
  };

  return (
    <div className="Tuduku">
      <img
        onClick={toggleState}
        src="/images/h2_image3.PNG"
        alt=""
        className={`${state ? "af_Tuduku" : ""} gsap-img`}
      />
      <img
        onClick={toggleState}
        className={`${state ? "" : "af_Tuduku"}`}
        src="/images/bfaf2.png"
        alt=""
      />
    </div>
  );
}

export default Tuduku;
