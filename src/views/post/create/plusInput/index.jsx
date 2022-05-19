import styles from "../create.module.scss";

const PlusInput = () => {
  return (
    <div className={styles.ingredientInputTop}>
      <input type="text" placeholder={"OO 아트붓 세트"} />
      <input type="text" placeholder={"재료 구매처의 링크를 입력해주세요."} />
    </div>
  );
};

export default PlusInput;
