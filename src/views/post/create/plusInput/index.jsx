import styles from "../create.module.scss";

import minusIconB from "../../../../assets/images/min_btn_b.svg";

const PlusInput = (props) => {
  return (
    <div className={styles.ingredientInputTop}>
      <input
        onChange={(e) => {
          props.midx = props.i;
          props.onChangeInput(e);
        }}
        type="text"
        placeholder={"OO 아트붓 세트"}
        id={"mt"}
      />
      <input
        onChange={(e) => {
          props.midx = props.i;
          props.onChangeInput(e);
        }}
        type="url"
        placeholder={"재료 구매처의 링크를 입력해주세요."}
        id={"murl"}
      />
      <img className={styles.minusImg} src={minusIconB} alt="minusImg" />
    </div>
  );
};

export default PlusInput;
