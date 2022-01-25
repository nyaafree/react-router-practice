import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
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
      <Router />
    </BrowserRouter>
  );
}
