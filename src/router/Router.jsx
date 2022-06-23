import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
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
        // renderのアロー関数の引数にはpropsが入る
        // 中身は下のコンソールで出力しているので確認してみる
        render={({ match: { url } }) => (
          <Switch>
            {/* 
              renderの中でSwitchタグを展開することにより入れ子構造のRoutingを実現できる
              renderに渡したアロー関数の引数部分にpropsとしてURL情報が渡ってくるのでこれを使えば
              下記のようにより効率的に書くことができる
            */}
            {console.log(url)}
            {/* 
              keyは再レンダリングするときの差分を識別するために
              Reactの中でLoop処理するときは
              必ずコンポーネントに設定する項目
              必ず一意の値にする

              Page1Routesをmap関数の引数には
              Route情報を表すオブジェクトが入っていくる
            */}
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {console.log(url)}
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* *は全部一致。すなはち上から順番にpathを見て何も一致しなければ下の404に遷移する */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
