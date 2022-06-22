import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// ここで設定するpathは /page2/ から見た相対パスにする
export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  // コロンを入れるとURLパラメータとして扱える
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
