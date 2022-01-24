import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

/* BrowserRouterタグで囲んだ範囲でRoutingが有効になる */
/* Linkタグはaタグのようなもの */
/* Switchタグの中でLinkタグで設定したリンクに対して表示するルールを記述 */
/* RouterタグでLinkタグで設定したリンクに対して表示するコンポーネントを設定 */

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        {/* 
          exactを設定しないと /page1 /page2など /を含むものも対象になってしまう
          exactを設定すれば完全一致条件に変わる
        */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {/* 
              renderの中でSwitchタグを展開することにより入れ子構造のRoutingを実現できる
              renderに渡したアロー関数の引数部分にpropsとしてURL情報が渡ってくるのでこれを使えば
              下記のようにより効率的に書くことができる
            */}
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
