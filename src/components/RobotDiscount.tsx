import React, { useContext } from "react";
import { appContext, appSetStateContext } from "../AppState";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

// 对象可以直接使用花括号进行展开
// RobotProps 定义的是从父组件传过来的数据
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);

  // 因为在做初始化的时候，setState 使用的是undefined 所以在使用
  // setState hook 函数的时候，应该做一个判断
  const addToCart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};

export default RobotDiscount;
