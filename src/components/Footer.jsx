import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <p>solotori公式サイト</p>
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
        <p>
          <small>
            Copyright &copy; ソロトリ All Rights Reserved.
          </small>
        </p>
      </footer>
    </>
  );
}

export default Footer;
