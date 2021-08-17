import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import ShoppingCart from "./components/ShoppingCart";
import styles from "./App.module.css";

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // await 后面接的是一个promise
      // 没有 try catch 的话 setLoading(false) 直接接在 setRobotGallery(data)后面
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>robot online</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Count + 1
      </button>
      <span>Count:{count}</span>
      <ShoppingCart />
      {(!error || error !== "") && <div>{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 === 0 ? (
              <RobotDiscount id={r.id} email={r.email} name={r.name} />
            ) : (
              <Robot id={r.id} email={r.email} name={r.name} />
            )
          )}
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default App;
