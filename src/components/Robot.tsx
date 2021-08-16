import React, { useContext } from "react";
import { appContext } from "../AppState";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

// 对象可以直接使用花括号进行展开
// RobotProps 定义的是从父组件传过来的数据
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
    </div>
  );
};

export default Robot;
