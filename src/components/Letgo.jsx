import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Idou from "./Idou";

function TravelSection() {
  const ref = useRef(null);

  useEffect(() => {
    const nom = document.querySelector(".idou");
    const aka = document.querySelector(".aka").clientHeight;
    const body = document.body.clientHeight;
  
    const handleScroll = () => {
      // スクロール値を取得
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (scrollY >= 3608) {
        return;
      }
      if (scrollY - 2156 >= 0) {
        const now = scrollY - 2156;
        const h = (now / aka) * 100;
        nom.style.top = `${h}%`;
      }
    };

    // スクロールイベントリスナーを登録
    window.addEventListener("scroll", handleScroll);

    // コンポーネントがアンマウントされたときにイベントリスナーを解除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空の依存リストを指定して初回レンダリング時のみ実行

  const setAnimation = () => {
    gsap.fromTo(
      ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "play none none reverse",
          start: "top center", //開始時のトリガー条件
          end: "bottom center", //終了時のトリガー条件
          // markers: true, // マーカー表示
        },
      }
    );
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, [ref]);
  return (
    <section className="aka">
      {/* <Idou /> */}
      <img src="/images/idou.png" alt="移動する人" className="idou" />
      <img src="/images/kumo.svg" className="kumo1" ref={ref}></img>
      <img src="/images/kumo.svg" className="kumo2" ref={ref}></img>
      <h3 className="saa">一歩踏み出そう</h3>
      <img src="/images/sorotori.svg" alt="Image 1" className="kyan" />
      <p className="mozi">
        solptoriキャンペーン
        <br />
        旅に出よう!!
        <br />
        大学生限定の
        <br />
        キャンペーン
        <br />
        を通してsorotoriで成長しよう
      </p>
      <img src="/images/kp1.PNG" alt="Image 1" className="kyan" />
      <p className="mozi">1. インスタでsorotoriのアカウントをフォロー!</p>
      <img src="/images/kp2.PNG" alt="Image 2" className="kyan" />
      <p className="mozi">
        2. sorotoriの投稿で
        <br />
        #からやぶりでソロトリを
        <br />
        メッションして投稿する
      </p>
      <img src="/images/kp3.PNG" alt="Image 3" className="kyan" />
      <p className="mozi">
        3.旅先の旅館の代金が
        <br />
        二割引きになる
      </p>
    </section>
  );
}

export default TravelSection;
