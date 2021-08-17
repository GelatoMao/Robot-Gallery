import React, { useContext } from "react";
import { appContext, appSetStateContext } from "../AppState";
import { withAddToCart } from "./AddToCart";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id, name) => void;
}

// 对象可以直接使用花括号进行展开
// RobotProps 定义的是从父组件传过来的数据
const RobotDiscount: React.FC<RobotProps> = ({
  id,
  name,
  email,
  addToCart,
}) => {
  const value = useContext(appContext);

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default withAddToCart(RobotDiscount);
