import React, { useEffect } from "react";

function Firstview() {
  const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
  useEffect(() => {
    function run() {
      let image = document.querySelector(".fast2");
      image.onload = async function () {
        let engine = new RainyDay({
          image: this,
        });
        engine.rain([[1, 2, 8000]]);
        engine.rain(
          [
            [3, 3, 0.88],
            [5, 5, 0.9],
            [6, 2, 1],
          ],
          100
        );
        await sleep(5000);
        let rain = document.querySelector(".rain");
        rain.classList.add("none");
      };
      image.crossOrigin = "anonymous";
      image.src = "/images/fast1.PNG";
    }
    run();
  }, []);

  return (
    <>
      {/* <div id="background"></div> */}
      <section className="fv">
        <h2>
          {/* <span className="fvtext">変わるときは</span> */}
          <span className="fvnow"></span>
        </h2>
        <img src="" alt="Fast 1" className="fast2" />
        {/* <div className="rain-container">
          {Array.from({ length: 30 }, (_, index) => (
            <div key={index} className="raindrop"></div>
          ))}
        </div> */}
      </section>
    </>
  );
}

export default Firstview;
