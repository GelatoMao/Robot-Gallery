import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "haha",
  shoppingCart: { items: [] },
};

/**
 * 因为添加购物车的操作涉及到全局状态state的更新，需要使用到setState这个钩子函数
 * 为了能够共享setState钩子，需要创建新的context来连接这个setState函数，appSetStateContext
 */

export const appContext = React.createContext(defaultContextValue);
// 因为setState是一个函数，所以可以用undefined作为他的初始化值
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
