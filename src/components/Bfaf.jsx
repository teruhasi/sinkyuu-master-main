import React, { useEffect } from "react";
import gsap from "gsap";
import Saitou from "./Saitou";
import Tuduku from "./Tuduku";
import Watanabe from "./Watanabe";

function Bfaf() {
  useEffect(() => {
    var repeatAnime = gsap.timeline({
      repeat: -1, // アニメーションの繰り返し回数。-1で無限回
      repeatDelay: 0.1, // ループとループの間の時間。.1秒
    });
    repeatAnime.to(".gsap-img", {
      keyframes: [
        { duration: 2, x: 30, y: 10, ease: "power4.Out" }, //このアニメーションが終わったら下のアニメーションが起こる。
        { duration: 2, x: 0, y: 0, ease: "power4.Out" },
        { duration: 2, x: -20, y: 10, ease: "power4.Out" },
        { duration: 2, x: -10, y: 0, ease: "power4.Out" },
        { duration: 2, x: 0, y: 10, ease: "power4.Out" },
        { duration: 2, x: 10, y: 0, ease: "power4.Out" },
        { duration: 2, x: 10, y: 10, ease: "power4.Out" },
        { duration: 2, x: 0, y: 0, ease: "power4.Out" },
        { duration: 2, x: -10, y: 10, ease: "power4.Out" },
        { duration: 2, x: 0, y: 0, ease: "power4.Out" },
      ],
    });
  }, []);

  return (
    <>
      <section>
        <p className="kimigasuki">
          <>今の自分に自信がなかったり</>
          <br />
          <>目標がなんとなくになっていませんか？</>
          <br />
          そんな<span>大学生</span>向けの
          <br />
          <span>スペシャルサイト</span>
          <br />
          ソロトリをすることによって
          <br />自分の殻を割って成長しよう
        </p>
        <div className="gsap-repeatAnime">
          <div className="nandemo">
            <Saitou />
            <Tuduku />
            <Watanabe />
          </div>
        </div>
      </section>
    </>
  );
}

export default Bfaf;
