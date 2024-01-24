import React, { useEffect } from "react";
import gsap from "gsap";

function Idou() {
  useEffect(() => {
    // スクロールイベントリスナーを追加
    const handleScroll = () => {
      // スクロール値を取得
      const scrollY = window.scrollY;
      

      // GSAPを使用して画像を動かすアニメーション
      gsap.to(".scroll-image", {
        y: scrollY / 3, // 任意のスクロールに対する動きの比率を調整
        ease: "power1.out",
      });
    };

    // スクロールイベントリスナーを登録
    window.addEventListener("scroll", handleScroll);

    // コンポーネントがアンマウントされたときにイベントリスナーを解除
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空の依存リストを指定して初回レンダリング時のみ実行

  return (
    <div className="scroll-container">
      <img
        src="/images/kp3.PNG"
        alt="Scrolling Image"
        className="scroll-image"
      />
    </div>
  );
}

export default Idou;
