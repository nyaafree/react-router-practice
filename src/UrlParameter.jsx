// urlパラメータを扱いたい場合は下記の urlParamsをimportする
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  console.log(useParams());
  // オブジェクトの分割代入
  // urlParams() では {url:100} がreturn される
  const { id } = useParams();
  const { search } = useLocation();
  // useLocationの中身
  // {
  //   "pathname": "/page2/999",
  //   "search": "?name=hogehoge",
  //   "hash": ""
  // }
  console.log(search);

  // URLSearchParamsはクエリパラメータを便利に扱うためのもの
  const query = new URLSearchParams(search);

  console.log(query);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")}です</p>
    </div>
  );
};
