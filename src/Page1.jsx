import { Link, useHistory } from "react-router-dom";
export const Page1 = () => {
  // https://zenn.dev/uhyo/articles/array-n-keys-yamero
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();
  console.log(history);

  // これでJavaScript側での画面遷移が実現できる
  // useHistory() の戻り値にはpushというメソッドを持っている
  const onClickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1です</h1>
      {/* stateに arr を渡すことで遷移先のページで受け取れる */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
