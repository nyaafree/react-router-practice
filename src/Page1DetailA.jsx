// 画面遷移した際に直前のページから渡されたstateを管理するためのもの
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  // useLocation() の中身
  // {
  //   "pathname": "/page1/detailA",
  //   "state": 「0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],
  //   "search": "",
  //   "hash": "",
  //   "key": "o6jst7"
  // }
  console.log(state);

  // 画面遷移の多くで useHisotory() を使うので覚えておく
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAです</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
