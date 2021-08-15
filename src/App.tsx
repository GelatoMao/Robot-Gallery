import React from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import styles from "./App.module.css";

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  // fetch 返回的是一个promise，res.json()是响应主体的数据，而res.json()返回
  // 的又是一个promise，
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>robot online</h1>
        </div>
        <button
          onClick={() => {
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 };
            });
          }}
        >
          Click
        </button>
        <span>Count:{this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
