import React, { useState } from 'react';

function Header() {
  const [ham, setHam] = useState(false);
  const toggleHammenu = () => {
    if (ham) setHam(false);
    else {
      setHam(true);
    }
  };
  return (
    <header>
      <div className="header">
        <h1>
          <a href="https://solotori.jp/">
            <img src="/images/logo.svg" />
          </a>
        </h1>
        <div className="menu-btn" onClick={toggleHammenu}>
          <div
            className={`${
              ham ? 'line-active' : ''
            } line`}></div>
        </div>
      </div>

      <nav className={`${ham ? 'active' : ''} menu`}>
        <ul>
          <li>
            <h2>solotori公式サイト</h2>
          </li>
          <li>
            <p className="papa">見つける</p>
            <ul>
              <li className="footer-list_item">
                <a href="https://solotori.jp/concept/">
                  コンセプトを見つける
                </a>
              </li>
              <li className="footer-list_item">
                <a href="https://solotori.jp/event/">
                  イベントを見つける
                </a>
              </li>
              <li className="footer-list_item">
                <a href="https://solotori.jp/area/">
                  都道府県から見つける
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p className="papa">ガイド</p>
            <ul>
              <li className="footer-list_item">
                <a href="https://hone-corp.jp/solotori-howtouse">
                  ご利用ガイド
                </a>
              </li>
              <li className="footer-list_item">
                <a href="https://solotori.jp/contact/">
                  お問い合わせ
                </a>
              </li>
              <li className="footer-list_item">
                <a href="https://hone-corp.jp/solotori/lp-local">
                  掲載案内
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p className="papa">企業情報</p>
            <ul>
              <li className="footer-list_item">
                <a href="https://hone-corp.jp/">運営会社</a>
              </li>
              <li className="footer-list_item">
                <a href="https://hone-corp.jp/solotori-terms">
                  利用契約
                </a>
              </li>
              <li className="footer-list_item">
                <a href="https://hone-corp.jp/solotori-privacy">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flexes">
          <a href="https://www.instagram.com/solotori_official/?hl=ja">
            <img
              src="/images/insuta.webp"
              alt="Icon"
              className="zizi"
            />
          </a>
          <button className="botan">お問い合わせ</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
