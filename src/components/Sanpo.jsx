import React, { useState } from 'react';

const ScrollableImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  // スクロールイベントをウィンドウに追加
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // コンポーネントがアンマウントされたときにイベントリスナーを削除
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // スクロールに合わせて画像のスタイルを変更
  const imageStyle = {
    transform: `translateY(${scrollPosition}px)`,
    transition: 'transform 0.3s ease-in-out', // オプション: スムーズな移動を追加
  };

  return (
    <div>
      {/* 画像の親要素 */}
      <div style={{ height: '1000px' /* 画像を下にスクロールさせるためにコンテンツを長くする */ }}>
        {/* 画像 */}
        <img
          src="your-image-url.jpg" // 画像のURLを指定
          alt="Scrollable Image"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default ScrollableImage;