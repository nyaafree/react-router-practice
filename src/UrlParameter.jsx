// urlパラメータを扱いたい場合は下記の urlParamsをimportする
import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  console.log(useParams());
  // オブジェクトの分割代入
  // urlParams() では {url:100} がreturn される
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは {id} です</p>
    </div>
  );
};
