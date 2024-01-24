import React, { useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";

const Pagetop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // smoothscroll.jsの初期化
    smoothscroll.polyfill();

    // スクロールイベントのリスナーを追加
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="pagetop"
      style={{ opacity: showButton ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
      onClick={scrollToTop}
    >
      Top
    </div>
  );
};

export default Pagetop;