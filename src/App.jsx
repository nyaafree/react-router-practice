import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
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
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
